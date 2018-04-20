READ THIS FIRST
---------------

The .sel documents in this directory contain list of tasks and design 
elements.  These are meant to be used as a text-based nested lists, with 
each item on a single line (i.e., no line breaks):
    < > task list item
    ( ) data list item

Indentation is 4 spaces for this document.

If you understand the "tasks" in DEFINITIONS below you can update the 
PUNCHLIST.sel file in your local branch to mark off what you've completed, 
etc.


===


DIRECTORY CONTENTS
------------------

spec/GR5:

    README.txt    - this file

    PUNCHLIST.sel - punch list for completing GR5

                    reference/optional config files for:
    COMMANDS.sel  - commands & parameters
    LIMITS.sel    - value limits & constraints for command parameters
    MENUS.sel     - pieshell menu hierarhcy


===


DEFINITIONS
-----------

owners:
    @ZH S.
    @WB A.
    @AS Lads
    @EH +
    @GC +

data:
    (.) = generic line item
    (D) = dependency
    (X) = disabled

tasks: 
    <!> = required
    <?> = optional
    </> = completed
    <~> = ongoing

wedges:
    C = center
    T = top
    B = bottom
    L = left
    R = right

terminology:
    menu = pie menu
    modal = command-specific modal dialog
    builder = command builder window
