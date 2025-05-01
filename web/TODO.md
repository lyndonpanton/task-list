# TODO

## Description

A list of stories for this project.

## List

### Create

- [x] Tasks should be added to the correct database category
- Tasks should have attribute(s) to relate them to tables and rows in the
database

### Read

- [x] Retrieve tasks from the database on page load
- [x] Display tasks from the database on page load

### Update

- When a task is made editable, all other task should be made uneditable
- Update the related task in the database

### Delete

- Delete the related task in the database

### Content

- [x] It may be better display all categories tasks at all times and have a
separator between them instead of switching categories via the sidebar
    - The sidebar should instead use anchor navigation

### Styling

- [x] Circle icons should be left-aligned
- [x] Task text should be left-aligned, to the right of checkboxes
- Task text should take up the majority of the width of the parent element
- [x] Pen icons should be right-aligned, to the left of delete icons
- [x] Delete icons should be right-aligned

### Interactivity

- [x] Users should be able to change between task categories

### Validation

- Create
    - Do not allow users to make an empty task
        - Client-side
        - Server-side
    - Restrict character limit of tasks
        - Client-side
        - Server-side
- Read
- Update
    - Restrict character limit of tasks
        - Client-side
        - Server-side
    - Do not allow users to edit a task to be empty
    - Restrict type of characters allowed
        - Client-side
        - Server-side
- Delete
    - Warn user if they attempt to delete an incomplete task

### Bugs

- [x] Overflow of task categories increases parent element (and page) size
- [x] Overflow of tasks increases parent element (and page size)
- [x] Tasks are not displayed in their correct categories
