---
title: "Enable Microsoft Update Service with PowerShell"
date: "2018-05-28"
tags:
  - Development
  - PowerShell
  - Script
---

### **Enable Microsoft Update Service**

```powershell
$mu = New-Object -ComObject Microsoft.Update.ServiceManager -Strict
$mu.AddService2("7971f918-a847-4430-9279-4a52d1efe18d",7,"")
```
