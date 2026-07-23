$content = Get-Content 'C:\Users\my\Downloads\PMRG_Solution_Website_IA_Content_Plan.html' -Raw -Encoding UTF8

# Remove base64 images first (they're huge)
$content = $content -replace 'src="data:image[^"]*"', 'src=""'

# Extract body
if ($content -match '(?s)<body[^>]*>(.*?)</body>') {
    $body = $matches[1]
    
    # Remove style and script tags
    $body = [regex]::Replace($body, '(?s)<style[^>]*>.*?</style>', '')
    $body = [regex]::Replace($body, '(?s)<script[^>]*>.*?</script>', '')
    
    # Replace common HTML entities
    $body = $body -replace '&amp;', '&'
    $body = $body -replace '&lt;', '<'
    $body = $body -replace '&gt;', '>'
    $body = $body -replace '&nbsp;', ' '
    $body = $body -replace '&#39;', "'"
    $body = $body -replace '&quot;', '"'
    
    # Replace headers with markdown-style markers
    $body = [regex]::Replace($body, '<h1[^>]*>(.*?)</h1>', "`n# `$1`n")
    $body = [regex]::Replace($body, '<h2[^>]*>(.*?)</h2>', "`n## `$1`n")
    $body = [regex]::Replace($body, '<h3[^>]*>(.*?)</h3>', "`n### `$1`n")
    $body = [regex]::Replace($body, '<h4[^>]*>(.*?)</h4>', "`n#### `$1`n")
    $body = [regex]::Replace($body, '<h5[^>]*>(.*?)</h5>', "`n##### `$1`n")
    $body = [regex]::Replace($body, '<h6[^>]*>(.*?)</h6>', "`n###### `$1`n")
    
    # Replace list items
    $body = [regex]::Replace($body, '<li>(.*?)</li>', "- `$1")
    
    # Replace paragraphs with newlines
    $body = [regex]::Replace($body, '<p>', "`n")
    $body = [regex]::Replace($body, '</p>', "`n")
    
    # Replace br tags
    $body = $body -replace '<br\s*/?>', "`n"
    
    # Replace strong/em
    $body = [regex]::Replace($body, '<strong>(.*?)</strong>', '**$1**')
    $body = [regex]::Replace($body, '<em>(.*?)</em>', '*$1*')
    
    # Remove remaining HTML tags
    $body = [regex]::Replace($body, '<[^>]+>', '')
    
    # Clean up whitespace
    $body = [regex]::Replace($body, '\n{3,}', "`n`n")
    $body = $body.Trim()
    
    $body | Out-File -FilePath 'd:\PMRG website\content_plan.txt' -Encoding UTF8
    Write-Host "Content extracted successfully. Length: $($body.Length) chars"
}
