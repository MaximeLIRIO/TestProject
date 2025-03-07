using System;
using System.Windows;

namespace TestExplorer.UI
{
    public partial class TestExplorerWindow : Window
    {
        public TestExplorerWindow()
        {
            InitializeComponent();
            LoadTests();
        }

        private void LoadTests()
        {
            // Logic to load and display tests
            var tests = GetTests();
            foreach (var test in tests)
            {
                // Assuming there's a method to add tests to the UI
                AddTestToUI(test);
            }
        }

        public void RefreshTestList()
        {
            // Logic to refresh the list of tests
            LoadTests();
        }

        private void OnTestSelected(object sender, RoutedEventArgs e)
        {
            // Logic to handle user interaction when a test is selected
            var selectedTest = (sender as FrameworkElement)?.DataContext as Test;
            if (selectedTest != null)
            {
                DisplayTestResults(selectedTest.Results);
            }
        }

        public void DisplayTestResults(string results)
        {
            // Logic to display test results in the UI
            TestResultsTextBox.Text = results;
        }
    }
}