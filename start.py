#!/usr/bin/env python3
import http.server
import socketserver
import webbrowser
import os
import sys

DEFAULT_PORT = 8000

def main():
    os.chdir(os.path.dirname(os.path.abspath(__file__)))

    Handler = http.server.SimpleHTTPRequestHandler
    socketserver.TCPServer.allow_reuse_address = True

    port = DEFAULT_PORT
    try:
        httpd = socketserver.TCPServer(("", port), Handler)
    except OSError:
        print(f"Port {port} is already in use. Trying port {port + 1}...")
        port = port + 1
        try:
            httpd = socketserver.TCPServer(("", port), Handler)
        except OSError:
            print("Error: Could not start server. Please check if another process is using the port.")
            sys.exit(1)

    url = f"http://localhost:{port}/"
    print(f"JUST ZENITH website is running at: {url}")
    print(f"Serving from: {os.getcwd()}")
    print(f"Press Ctrl+C to stop the server\n")

    try:
        webbrowser.open(url)
    except:
        pass

    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")
        httpd.server_close()
        sys.exit(0)

if __name__ == "__main__":
    main()
