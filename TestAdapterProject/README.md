# Test Adapter Project

This project is a .NET Framework test adapter designed to facilitate the execution and management of unit tests. 

## Project Structure

- **src/**: Contains the source code for the test adapter.
  - **TestAdapterProject.csproj**: The project file that includes configuration, dependencies, and build settings.
  - **Adapter/**: Contains the implementation of the test adapter.
    - **TestAdapter.cs**: The main class that implements the test adapter logic, including methods to run tests and retrieve results.
  - **Tests/**: Contains unit tests for the adapter.
    - **SampleTest.cs**: A class that includes sample unit tests to demonstrate the functionality of the adapter.
  
- **packages.config**: Lists the NuGet packages required for the project.

## Setup Instructions

1. Clone the repository or download the project files.
2. Open the project in your preferred .NET development environment.
3. Restore the NuGet packages listed in `packages.config`.
4. Build the project to ensure all dependencies are resolved.

## Usage

To use the test adapter, instantiate the `TestAdapter` class from the `Adapter` namespace and call the `RunTests` method to execute your tests. You can retrieve the results using the `GetTestResults` method.

## Example

```csharp
var adapter = new TestAdapter();
adapter.RunTests();
var results = adapter.GetTestResults();
```

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.