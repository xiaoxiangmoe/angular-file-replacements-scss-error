# FileReplacementsScss


run `yarn start -c serve`


```
"serve":{
  "fileReplacements": [
    {
      "replace": "src/app/app-color.ts",
      "with": "src/app/app-color-replace.ts"
    },
    {
      "replace": "src/app/_app-color.scss",
      "with": "src/app/_app-color-replace.scss"
    }
  ]
}
```

fileReplacements in ts works, but fileReplacements in scss don't work.
