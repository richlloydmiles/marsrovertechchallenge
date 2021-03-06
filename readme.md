## marsrovertechchallenge
------
https://code.google.com/archive/p/marsrovertechchallenge/

#### Installation:

- Make sure Node (npm) is installed (at least v11.4.0 for https://nodejs.org/api/readline.html)
- Run `npm install` to install all the dependencies

- Run CLI with `npm run start`
- Run unit tests with `npm run start`
- Run linter with `npm run lint`
 
#### Notes

###### Approach

I decided to take the simplest possible approach to solve the problem which for me was 
to use Node JS - as most people have this installed and it is easy to run and understand.

I also took the approach of using native JS so to avoid having to use Babel to compile any of the 
major ES6 / ES7 features - again with simplicity in mind.

Having the tests and components in the same folder is a structure adopted from the redux ducks pattern
 - https://medium.com/@scbarrus/the-ducks-file-structure-for-redux-d63c41b7035c
 - https://github.com/erikras/ducks-modular-redux

###### Extra Features

Usually I would attempt to write the absolute minimum that is required to meet the scope of the challenge,
however, 3 features were added that I think are small but significant enough to warrant their inclusion:

- Can be replayed:
    The app can be restarted when process is completed via the CLI prompt.
    This is valuable for testing and allows the user to try out the challenge multiple times

- Infinite Rovers can be added:
    The user can keep adding Rover positions until they enter 'N' when prompted
    for a new rover position, this will trigger the second part of the app to be run.
    This allows for more than 2 Rovers to be added.

- Off the grid alerts:
    When the Rover moves off the plateau I have added a notification - this serves no functional purpose 
    (but otherwise the plateau does not have any real use)
    
###### Not included

- Test coverage: I would usually try for 100% test coverage, however, I have avoided over testing (adding stubs / spies) as 
I don't think it is needed for the purposes of the challenge. If any type of stubbing were to happen it would be mocking the input values read from the CLI.

- Separation of concerns: Additionally I would usually separate the CLI input utility library 
into its own module so that the app is agnostic of how data is recieved, 
however, again I don't think this is completely necessary for the purposes of the challenge.

- Error Handling: For the purposes of this challenge I assume that all user input is uncorrupted, as it was not
specified otherwise. Any malformed data will cause the CLI to break.
