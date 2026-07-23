$word = New-Object -ComObject Word.Application
$word.Visible = $false
$doc = $word.Documents.Open('D:\PMRG Content\PMRG_Solution_Website_IA_Content_Plan.docx', $false, $true)

$out = @()

foreach ($para in $doc.Paragraphs) {
    $text = $para.Range.Text.Trim("`r", "`n", "`t", " ")
    if ([string]::IsNullOrWhiteSpace($text)) { continue }
    
    try {
        $style = $para.Style.NameLocal
        $isList = $para.Range.ListFormat.ListType -ne 0
        $isBold = $para.Range.Bold -eq -1
    } catch {
        $style = "Normal"
        $isList = $false
        $isBold = $false
    }
    
    if ($style -match "Heading 1") {
        $out += "`n# $text"
    } elseif ($style -match "Heading 2") {
        $out += "`n## $text"
    } elseif ($style -match "Heading 3") {
        $out += "`n### $text"
    } elseif ($style -match "Heading 4") {
        $out += "`n#### $text"
    } elseif ($style -match "Heading") {
        $out += "`n## $text"
    } elseif ($isList -or $style -match "List Paragraph") {
        $out += "- $text"
    } else {
        if ($isBold) {
            $out += "`n**$text**"
        } else {
            $out += "`n$text"
        }
    }
}

$doc.Close()
$word.Quit()

$out | Out-File -FilePath 'C:\Users\my\.gemini\antigravity-ide\brain\b9bf1333-3324-46e4-96a8-85225c8a5fae\pmrg_content_extraction.md' -Encoding UTF8
