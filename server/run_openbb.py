import subprocess

def run_command(command):
    try:
        # Execute the command
        # command is now a list of arguments: the first is the command, the rest are the command's arguments
        result = subprocess.run(command, check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)

        # Display the output and error (if any)
        print("Output:", result.stdout)
        if result.stderr:
            print("Error:", result.stderr)
    except subprocess.CalledProcessError as e:
        print(f"An error occurred while trying to run the command: {e}")

# Example usage
if __name__ == "__main__":
    command = ["uvicorn", "openbb_core.api.rest_api:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]
    run_command(command)
