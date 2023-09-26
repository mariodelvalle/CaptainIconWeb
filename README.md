<img src="/assets/cv_icon.png" align="right" width="128px" />

# Mario del Valle Guijarro's CV

This repository contains **my professional data**, stored as a [MAC](/CV/MAC.json) (or Manfred Awesomic CV), an open-source, interchangeable, machine-readable format.
<br/>
<br/>

<div align='center'>
  <img src='https://img.shields.io/static/v1?label=CV%20Last%20Sync&message=2023-09-26 14:52 UTC&color=brightgreen&style=for-the-badge'>
  <a href='https://github.com/getmanfred/mac'>
    <img src='https://img.shields.io/static/v1?label=MAC%20Version&message=0.3&color=brightgreen&style=for-the-badge'>
  </a>
  <a href='#%EF%B8%8F-license'>
    <img src='https://img.shields.io/badge/GDPR%20Compliant-40479B?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAG7AAABuwE67OPiAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAThQTFRF////QUebQUebQUebQUebQkibQ0maREmaRUqaRUuZRkuZR0yZSE2YSU6YSk6YTFCXTlKWVFeUVVeUVliUV1mTV1mUWFqTWVqTW1ySXF2SXV6RXl+RYGCQYGCRYWGQamiNbWuMb2yLcG2LcW6Lc2+KdXGJdnKJeHSIeXSIe3aHfHeHfXeHfXiGfnmGf3mGg3yFg32Eh4CDiICDioKCjoaAj4aAkYh/lYt+npJ7oJR7ppl4ppl5qZx3q513rp92r6B1sKF1sqN0s6N0tKR0tqZzt6Zzuahyuqlyvatxv61wwK5vw7FuxbJuxrNty7dszLdsz7pr0Ltq1L5p2sNm2sNn3MVm3cZl4Mhk4Mhl48pk5cxj5sxj6M5i6tBh7NFh7tNg8dZf89de9dle9tpd+t1c+95b/N9b/+FaZsCVrgAAAAR0Uk5TAKH3+IOyXJkAAAGHSURBVFjD7dbZUsIwGAVgwFPbWgUEFQQXFgFRWcQNFVRAqLsimwsqspj3fwPvEMfWJnR0BoZz90+bL03apDEYRhllOGI0jemIyWiAzgwAYNEJOC76BjYA4PDlo7TUrViAhdib3w7wdbILwO5/iy2wAcEGqTgBcyawB8BZIY0g4xDKtXRPla6VGYfA+ThvT+nlfBw9ILpUVJdIBYgRWVLqjpPkiEgDyIQ8TisAs0+EyDQA3+qEFEew3mnxNIAt7g4rAmvuuG0QVyM7EIr/cnteE+CPSg/HUyrNw6ckH9V6Ag8hq2r9S7ekOKkFrFydRVVHcJ280ZwDARBUAeHntb95jWqTOEUJLKdUgNQyFZCrN+9sCs3nis16jgYwt4jyHhwjLTMN4MhubSsCO1tZxz8uJiHzrcwIjEDivH3i+fq+T9rnCTbAWiWFcQDiJgCMF0jVyvhfKB3IAIL7z7EZAPJBiWOcAwkSgMA7ubR0qz52JOH1PqlrS5uY5xYH/oykCeg+aI4yynDkEwtqUWMkn99xAAAAAElFTkSuQmCC'>
  </a>
</div>
<br/>
<br/>

- [Folder Structure](#-folder-structure)
- [How can you sync your Manfred profile with your own repo](#-how-can-you-sync-your-manfred-profile-with-your-own-repo)
- [How can you update your CV in Manfred](#%E2%93%9C%EF%B8%8F-how-can-you-update-your-cv-in-manfred)
- [How can you update your CV in GitHub](#octocat-how-can-you-update-your-cv-in-github)
- [Contact and Troubleshooting](#-contact-and-troubleshooting)
- [License](#%EF%B8%8F-license)

## 📁 Folder Structure

The structure of this repo is pretty simple. You have all metadata and config files on the base directory. There, you will find more files and folders, but just two are directly related and relevant to my MAC, `/cv` and `/assets`:

    .
    │
    ├── CV
    │    ├── MAC[_instance1][_language1].json
    │    ├── ...
    │    └── MAC[_instanceN][_languageN].json
    │
    ├── assets
    │
    └── ...

- [/cv](/cv), where you can find multiple versions of my CV (eg. `MAC.json` or `MAC_dev_ES.json`).
- [/assets](/assets), where I store assets related with my CVs (eg. pictures, certifications, etc.).

## 🔗 How can you sync your Manfred profile with your own repo

1. First, you have to [create an empty repository](https://github.com/new) (public or private) in your GitHub Account.
2. If you have a profile at Manfred ([getmanfred.com](https://www.getmanfred.com/)), you can configure the synchronization within `Settings/Data Management`.

<img alt="getmanfred.com" src="https://github.com/getmanfred/mac/blob/master/assets/sync/github_manfred_sync.png?raw=true" width="600">

3. You will be asked to select one repository to install the [Manfred GitHub Connector App](https://github.com/apps/manfred-github-connector). Just follow the instructions.

<img alt="https://github.com/apps/manfred-github-connector" src="https://github.com/getmanfred/mac/blob/master/assets/sync/github_manfred_connector.png?raw=true" width="600">

4. **You are done!** So easy, so powerful.

## Ⓜ️ How can you update your CV in Manfred

Just navigate to [your profile](https://getmanfred.com/profile) and update whatever you want. If you have synchronized your profile with your GitHub repo, **it will be updated automagically with a new version of your MAC**, including the latest updates.

<img alt="Magic" src="https://media4.giphy.com/media/ujUdrdpX7Ok5W/giphy.gif?cid=ecf05e471avdapgosxv5t0j0kovk1rr4vq59nlnapfuebgph&rid=giphy.gif&ct=g">

## :octocat: How can you update your CV in GitHub

Just edit your MAC in the `/CV` folder in the repository page or directly in your machine, commit and push the changes. [Your profile in Manfred](<(https://getmanfred.com/profile)>) will be updated too. **If you have configured Manfred to synchronize your data in other platforms, they will be updated too!**

## 🪠 Contact and Troubleshooting

> :warning: Remember that your CV has to be [a valid MAC JSON file](https://github.com/getmanfred/mac) to be synchronized !!!

For example, there are 4 "study types" ("officialDegree", "certification", "unaccredited" and "selfTraining") if you include a new type like "kindergarten", your CV could be a valid JSON file but not a MAC and therefore, **your data won't be synchronized and we will send you an email with detailed info on the error**.

You can find the full MAC definition available [here](https://github.com/getmanfred/mac/blob/master/schema/schema.json). If you have any question, please, don't hesitate to reach us at [support@getmanfred.com](mailto:support@getmanfred.com), ping us on [Twitter](https://twitter.com/getmanfred) or [fill a support ticket](https://getmanfred.freshdesk.com/). We'd love to help you! 🤓

## ⚖️ License

The CVs included in this repository contain my personal and professional data, and they can't be automatically processed without my explicit permission according to the [GDPR](https://gdpr-info.eu/) (General Data Protection Regulation).

The [MAC format](https://github.com/getmanfred/mac) is free and open-source software licensed and distributed under the [Creative Commons Attribution Share Alike 4.0 International](https://creativecommons.org/licenses/by-sa/4.0/) (CC BY-SA 4.0 International).
