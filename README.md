# nodo-frontend-workshop
It is a collection of workshops to learn frontend topics. 🧑‍💻🎨

1. First at all, the developer needs to create its own develop branch:

  For example:
  - john_doe@mail.com: *develop__doe-john*
  - Jane Doe: *develop__doe-jane*


From the **main** branch put the next command: `git checkout -b "develop__doe-john"`

2. After that, each developer have to create their own folder and add `.gitkeep` file:

For example:
- John Doe: *doe_john/.gitkeep*
- Jane Doe: *doe_jane/.gitkeep*

Then the developer add and commit the changes:

`git add . && git commit -m "feat: Add new features"` or `git checkout -b "develop__doe-john"`

```mermaid
    gitGraph
       commit
       branch develop__doe-john
       commit
       commit
       branch feature/css-magazine-cover__doe-john
       commit
       checkout develop__doe-john
       commit
       commit
       branch feature/html-form-a11y__doe-john
       commit
       commit
```
