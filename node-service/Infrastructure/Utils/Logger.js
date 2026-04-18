const COLORS = {
    reset: "\x1b[0m",
    bright: "\x1b[1m",
    green: "\x1b[32m",
    red: "\x1b[31m",
    cyan: "\x1b[36m",
    yellow: "\x1b[33m"
};

export const Logger = {
    info: (msg) => console.log(`${COLORS.cyan}[INFO]${COLORS.reset} ${msg}`),
    success: (msg) => console.log(`${COLORS.green}[SUCCESS]${COLORS.reset} ${msg}`),
    error: (msg, detail = "") => {
        console.error(`${COLORS.red}${COLORS.bright}[ERROR]${COLORS.reset} ${COLORS.red}${msg}${COLORS.reset}`, detail);
    },
    db: (msg) => console.log(`${COLORS.yellow}[DATABASE]${COLORS.reset} ${msg}`)
};