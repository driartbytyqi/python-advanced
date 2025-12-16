export async function fetchWithRetry(url, options = {}) {
    const {
        method = 'GET',
        headers = {},
        body,
        timeout = 8000,
        retries = 2,
        retryDelay = 500,
        parseJson = true,
        throwOnHttpError = true
    } = options;

    const buildInit = () => {
        const init = { method, headers: { ...headers } };
        if (body != null) {
            if (typeof body === 'object' && !(body instanceof FormData) && !(body instanceof URLSearchParams)) {
                init.body = JSON.stringify(body);
                init.headers['Content-Type'] = init.headers['Content-Type'] ?? 'application/json';
            } else {
                init.body = body;
            }
        }
        return init;
    };

    let attempt = 0;
    while (true) {
        attempt++;
        const controller = new AbortController();
        const id = setTimeout(() => controller.abort(), timeout);
        const init = buildInit();
        init.signal = controller.signal;

        try {
            const res = await fetch(url, init);
            clearTimeout(id);

            const contentType = res.headers.get?.('content-type') || '';
            const data = parseJson && contentType.includes('application/json')
                ? await res.json()
                : await res.text();

            if (!res.ok && throwOnHttpError) {
                const err = new Error(`HTTP ${res.status} ${res.statusText}`);
                err.status = res.status;
                err.data = data;
                throw err;
            }

            return { ok: res.ok, status: res.status, statusText: res.statusText, headers: res.headers, data };
        } catch (err) {
            clearTimeout(id);
            const nonRetryable = err.status != null && err.status >= 400 && err.status < 500 && err.status !== 429;
            if (nonRetryable || attempt > retries) throw err;
            const backoff = Math.round(retryDelay * Math.pow(2, attempt - 1) + Math.random() * 100);
            await new Promise(r => setTimeout(r, backoff));
        }
    }
}