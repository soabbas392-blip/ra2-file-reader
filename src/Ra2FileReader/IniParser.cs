namespace Ra2FileReader;

public class IniSection
{
    public string Name { get; set; } = string.Empty;
    public Dictionary<string, string> Entries { get; set; } = new(StringComparer.OrdinalIgnoreCase);
}

public static class IniParser
{
    public static List<IniSection> Parse(string filePath)
    {
        var sections = new List<IniSection>();
        IniSection? currentSection = null;

        foreach (var rawLine in File.ReadLines(filePath))
        {
            var line = rawLine.Trim();
            if (string.IsNullOrWhiteSpace(line))
            {
                continue;
            }

            var commentIndex = line.IndexOf(';');
            if (commentIndex >= 0)
            {
                line = line.Substring(0, commentIndex).Trim();
            }

            if (string.IsNullOrWhiteSpace(line))
            {
                continue;
            }

            if (line.StartsWith("[", StringComparison.Ordinal) && line.EndsWith("]", StringComparison.Ordinal))
            {
                currentSection = new IniSection
                {
                    Name = line[1..^1].Trim()
                };
                sections.Add(currentSection);
                continue;
            }

            if (currentSection is null)
            {
                continue;
            }

            var equalsIndex = line.IndexOf('=');
            if (equalsIndex <= 0)
            {
                continue;
            }

            var key = line[..equalsIndex].Trim();
            var value = line[(equalsIndex + 1)..].Trim();

            if (!string.IsNullOrWhiteSpace(key))
            {
                currentSection.Entries[key] = value;
            }
        }

        return sections;
    }
}
