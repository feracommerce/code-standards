# Fera Code Standards Repo
This repository contains Fera's code standards information and linter configs.

# How to use linters here

## Rubocop
Add a `.rubocop.yml` file with this in it:
```
inherit_from:
  - 'https://raw.githubusercontent.com/feracommerce/code-standards/master/.rubocop.yml'
  - 'https://raw.githubusercontent.com/feracommerce/code-standards/master/.rubocop-rails.yml'
  - 'https://raw.githubusercontent.com/feracommerce/code-standards/master/.rubocop-rspec.yml'
inherit_mode:
  merge:
    - Exclude
AllCops:
  TargetRubyVersion: 2.7
require:
  - rubocop-rails
  - rubocop-rspec
```
Then add the following to your Gemfile under `:test, :development` groups:
```
  gem "rubocop", "~> 1.35"
  gem "rubocop-rails", "~> 2.15"
  gem "rubocop-rspec", "~> 2.12"
```

## Brakeman (Rails)
For Rails repos you can add the `brakeman` gem, but you don't need to 

## Spellr
Copy `spellr` folders and add `spellr` to your gemfile.

## Stylelint, ESLint and JSHint
Add to your `package.json`:
```
"devDependencies": {
  "jshint": "2.13.5",
  "stylelint": "14.9.1",
  "stylelint-config-standard-scss": "5.0.0",
  "eslint": "8.21.0"
}
```
Then copy the other related files over.


# How to use .example files
If the file extension ends with `.example` in this repository, then it should be renamed and checked for needed replacements.

For example, `package.json.example` should be copied to `package.json` and `{{ APP_CODE }}` should be replaced with your app/repository name (excluding the `fera-` part).



# Other files
Most of the other files can just be copied to your own repsository.
