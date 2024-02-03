import subprocess

def run_command(command):
    try:
        # Execute the command in a non-blocking way
        print("Starting the server...")
        process = subprocess.Popen(command, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)

        # You can now do other things here while the server runs in the background
        # For example, wait for a certain condition to terminate the server, or just let it run indefinitely
        print("Server is running... (press Ctrl+C to stop)")

        # Example of waiting for the process to end (which it won't, unless externally terminated)
        try:
            stdout, stderr = process.communicate(timeout=10)  # Wait for 10 seconds for demonstration
        except subprocess.TimeoutExpired:
            print("Server is still running after 10 seconds...")

        print("Uvicorn running on http://0.0.0.0:8000 (Press CTRL+C to quit)")

        # If you reach this point and want to terminate the server, you can do so with:
        # process.terminate()

    except subprocess.CalledProcessError as e:
        print(f"An error occurred while trying to run the command: {e}")

# Example usage
if __name__ == "__main__":
    command = ["uvicorn", "openbb_core.api.rest_api:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]
    run_command(command)
