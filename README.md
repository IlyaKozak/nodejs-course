# RS School REST service

## Run app with Docker Compose

* Clone repo:

```
git clone git@github.com:IlyaKozak/nodejs-course.git
```
* Change directory to cloned repository:
```
cd nodejs-course
```

* Go to task ```task9-nestjs``` branch:
```
git checkout task9-nestjs
```
* Run application with docker-compose:
```
docker-compose up --build
```

## Load Testing Nest.js with Express & Fastify adapters
### Artillery:
Artilery config file to test ```/boards``` endpoints: https://github.com/IlyaKozak/nodejs-course/blob/task9-nestjs/artillery.io/performance-tests.yml

#### EXPRESS:
All virtual users finished  
Summary report @ 23:44:04(+0300) 2021-07-03

|                       |                   |             |
|-----------------------|-------------------|-------------|
| Scenarios launched:   | 3411              |             |
| Scenarios completed:  | 319               |             |
| Requests completed:   | 3249              |             |
| Mean response/sec:    | 71.44             |             |
| Response time (msec): |                   |             |
|                       | min:              | 3           |
|                       | max:              | 9996        |
|                       | median:           | 1113        |
|                       | p95:              | 8475.6      |
|                       | p99:              | 9651        |
| Scenario counts:      |                   |             |
|                       | Boards Endpoints: | 3411 (100%) |
| Codes:                |                   |             |
|                       | 200:              | 2454        |
|                       | 201:              | 795         |
| Errors:               |                   |             |
|                       | ETIMEDOUT:        | 3092        |

#### FASTIFY:
All virtual users finished
Summary report @ 23:36:49(+0300) 2021-07-03
|                       |                   |             |
|-----------------------|-------------------|-------------|
| Scenarios launched:   | 3382              |             |
| Scenarios completed:  | 634               |             |
| Requests completed:   | 5104              |             |
| Mean response/sec:    | 87.97             |             |
| Response time (msec): |                   |             |
|                       | min:              | 1           |
|                       | max:              | 9995        |
|                       | median:           | 570         |
|                       | p95:              | 7735.5      |
|                       | p99:              | 9362.7      |
| Scenario counts:      |                   |             |
|                       | Boards Endpoints: | 3382 (100%) |
| Codes:                |                   |             |
|                       | 200:              | 3909        |
|                       | 201:              | 1195        |
| Errors:               |                   |             |
|                       | ETIMEDOUT:        | 2748        |

### Vegeta:
Command:  
```echo "GET http://localhost:4000" | vegeta attack -duration=10s -rate=0 -max-workers=700 | vegeta report```

#### EXPRESS:
|              |                                  |  |
|--------------|----------------------------------|--|
| Requests     | [total, rate, throughput]        | 7333, 732.90, 663.42 |
| Duration     | [total, attack, wait]            | 11.053s, 10.005s, 1.048s |
| Latencies    | [min, mean, 50, 90, 95, 99, max] | 11.861ms, 992.539ms, 1.035s, 1.219s, 1.335s, 1.589s, 1.653s |
| Bytes In     | [total, mean]                    | 139327, 19.00 |
| Bytes Out    | [total, mean]                    | 0, 0.00 |
| Success      | [ratio]                          | 100.00% |
| Status Codes | [code:count]                     | 200:7333 |
| Error Set:   |                                  |  |

#### FASTIFY:
|              |                                  |  |
|--------------|----------------------------------|--|
| Requests     | [total, rate, throughput]        | 15357, 1535.70, 1471.83 |
| Duration     | [total, attack, wait]            | 10.434s, 10s, 433.954ms |
| Latencies    | [min, mean, 50, 90, 95, 99, max] | 4.553ms, 451.726ms, 472.143ms, 654.314ms, 685.347ms, 721.731ms, 832.904ms |
| Bytes In     | [total, mean]                    | 291783, 19.00 |
| Bytes Out    | [total, mean]                    | 0, 0.00 |
| Success      | [ratio]                          | 100.00% |
| Status Codes | [code:count]                     | 200:15357 |
| Error Set:   |                                  |  |

## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.

## Downloading

```
git clone {repository URL}
```

## Installing NPM modules

```
npm install
```

## Running application

```
npm start
```

After starting the app on port (4000 as default) you can open
in your browser OpenAPI documentation by typing http://localhost:4000/doc/.
For more information about OpenAPI/Swagger please visit https://swagger.io/.

## Testing

After application running open new terminal and enter:

To run all tests without authorization

```
npm test
```

To run only one of all test suites (users, boards or tasks)

```
npm test <suite name>
```

To run all test with authorization

```
npm run test:auth
```

To run only specific test suite with authorization (users, boards or tasks)

```
npm run test:auth <suite name>
```

## Development

If you're using VSCode, you can get a better developer experience from integration with [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extensions.

### Auto-fix and format

```
npm run lint
```

### Debugging in VSCode

Press <kbd>F5</kbd> to debug.

For more information, visit: https://code.visualstudio.com/docs/editor/debugging
