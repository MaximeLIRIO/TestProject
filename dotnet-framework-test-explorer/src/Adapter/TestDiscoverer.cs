using System;
using System.Collections.Generic;
using System.Reflection;

namespace Adapter
{
    public class TestDiscoverer
    {
        public IEnumerable<string> DiscoverTests(string assemblyPath)
        {
            var testMethods = new List<string>();
            var assembly = Assembly.LoadFrom(assemblyPath);

            foreach (var type in assembly.GetTypes())
            {
                if (IsTestClass(type))
                {
                    foreach (var method in type.GetMethods())
                    {
                        if (IsTestMethod(method))
                        {
                            testMethods.Add($"{type.FullName}.{method.Name}");
                        }
                    }
                }
            }

            return testMethods;
        }

        private bool IsTestClass(Type type)
        {
            // Logic to determine if the type is a test class
            return type.GetCustomAttribute<TestClassAttribute>() != null;
        }

        private bool IsTestMethod(MethodInfo method)
        {
            // Logic to determine if the method is a test method
            return method.GetCustomAttribute<TestMethodAttribute>() != null;
        }
    }
}