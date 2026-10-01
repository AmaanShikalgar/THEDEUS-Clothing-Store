#!/usr/bin/env bash
set -e

cd "$(dirname "$0")"

BOLD='\033[1m'
GREEN='\033[0;32m'
CYAN='\033[0;36m'
NC='\033[0m'

echo -e "============================================================"
echo -e "   ${BOLD}JUST ZENITH - LOCAL WEBSITE LAUNCHER (macOS / Linux)${NC}"
echo -e "============================================================"
echo ""

PORT=8000

try_python() {
    if command -v python3 &> /dev/null; then
        echo -e "${GREEN}[OK]${NC} python3 found. Starting server..."
        python3 start.py
        return 0
    fi
    if command -v python &> /dev/null; then
        PYVER=$(python -c 'import sys; print(sys.version_info[0])')
        if [ "$PYVER" = "3" ]; then
            echo -e "${GREEN}[OK]${NC} python3 found. Starting server..."
            python start.py
            return 0
        fi
    fi
    return 1
}

try_node() {
    if command -v node &> /dev/null; then
        echo -e "${GREEN}[OK]${NC} Node.js found. Installing deps (first run only)..."
        npm install --silent 2>/dev/null || true
        echo ""
        npm start
        return 0
    fi
    return 1
}

try_python && exit 0
try_node && exit 0

echo -e "\033[0;31m[ERROR]${NC} Neither Python 3 nor Node.js was found on your system."
echo ""
echo "Please install one of the following:"
echo "  - Python 3:  https://www.python.org/downloads/"
echo "     (macOS:   brew install python3)"
echo "  - Node.js:   https://nodejs.org/"
echo "     (macOS:   brew install node)"
echo ""
exit 1
