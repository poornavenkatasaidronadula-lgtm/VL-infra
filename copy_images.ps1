$src = 'C:\Users\ACER\.gemini\antigravity\brain\19fa9519-fa47-42ed-b7f1-8400652ab385\'
$dst = 'C:\Users\ACER\Desktop\VL Infra\src\assets\'

Copy-Item ($src + 'sprinkler_bright_1778087051262.png')  ($dst + 'sprinkler.png')     -Force
Copy-Item ($src + 'alarm_bright_1778087070377.png')      ($dst + 'fire_alarm.png')    -Force
Copy-Item ($src + 'extinguisher_bright_1778087089023.png') ($dst + 'extinguisher.png') -Force
Copy-Item ($src + 'cleanagent_bright_1778087105049.png') ($dst + 'clean_agent.png')   -Force
Copy-Item ($src + 'gas_bright_1778087124144.png')        ($dst + 'gas_suppression.png') -Force
Copy-Item ($src + 'deluge_bright_1778087144448.png')     ($dst + 'deluge_foam.png')   -Force

Write-Host "6 bright images copied!"
