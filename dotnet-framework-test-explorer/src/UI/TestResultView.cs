using System;
using System.Windows.Forms;

namespace TestExplorer.UI
{
    public class TestResultView : UserControl
    {
        private ListView resultListView;

        public TestResultView()
        {
            InitializeComponent();
        }

        private void InitializeComponent()
        {
            resultListView = new ListView();
            resultListView.Dock = DockStyle.Fill;
            Controls.Add(resultListView);
        }

        public void UpdateResults(TestResult[] testResults)
        {
            resultListView.Items.Clear();
            foreach (var result in testResults)
            {
                var item = new ListViewItem(result.TestName);
                item.SubItems.Add(result.Status.ToString());
                resultListView.Items.Add(item);
            }
        }

        public void ShowTestDetails(TestResult testResult)
        {
            // Logic to display detailed information about the selected test result
        }
    }

    public class TestResult
    {
        public string TestName { get; set; }
        public TestStatus Status { get; set; }
    }

    public enum TestStatus
    {
        Passed,
        Failed,
        Skipped
    }
}