---
title: 'How to Add NTFS Permission to Subfolders of Directory with PowerShell'
date: '2018-05-27'
tags:
  - Development
  - PowerShell
  - Script
  - NTFS
---

Uses NTFSSecurity Module available from https://ntfssecurity.readthedocs.io/en/latest/

### **Add NTFS Permissions to Subfolder**

```powershell
Get-ChildItem -Directory | Add-NTFSAccess -Account 'NT AUTHORITY\Authenticated Users' -AccessRights Read
```