// Generated file. Do not edit.
//
// Captured by actually running cucumber-js 13.0.0 with `--parallel 2` against a
// small feature with deliberately variable-duration steps (features/parallel.feature
// in this PR branch), so the workerId/timestamp values below reflect genuine
// concurrent worker scheduling rather than being synthesised after the fact.
import type { Envelope } from '@cucumber/messages'

export default [
  {
    meta: {
      protocolVersion: '32.2.0',
      implementation: {
        version: '13.0.0',
        name: 'cucumber-js',
      },
      cpu: {
        name: 'x64',
      },
      os: {
        name: 'linux',
        version: '6.18.5',
      },
      runtime: {
        name: 'node.js',
        version: '22.22.2',
      },
    },
  },
  {
    source: {
      data: 'Feature: Parallel cucumbers\n  Scenarios here are deliberately slow and of varying duration, so that running\n  them with multiple parallel workers produces genuine overlapping execution\n  windows and out-of-order completion - real data for testing timeline/worker\n  visualisations, rather than synthetic workerId assignment.\n\n  @slow\n  Scenario: Eating a large batch of cucumbers\n    Given there are 100 cucumbers\n    When I eat 40 cucumbers slowly\n    Then I should have 60 cucumbers\n\n  Scenario: Eating a small batch of cucumbers\n    Given there are 10 cucumbers\n    When I eat 3 cucumbers quickly\n    Then I should have 7 cucumbers\n\n  @slow\n  Scenario: Eating too many cucumbers\n    Given there are 5 cucumbers\n    When I eat 10 cucumbers slowly\n    Then I should have 0 cucumbers\n\n  Scenario: Sharing cucumbers with friends\n    Given there are 12 cucumbers\n    And there are 4 friends\n    When they share the cucumbers quickly\n    Then each friend has 3 cucumbers\n\n  @slow\n  Scenario: Growing more cucumbers\n    Given there are 0 cucumbers\n    When 20 cucumbers grow slowly\n    Then I should have 20 cucumbers\n\n  Scenario: Composting rotten cucumbers\n    Given there are 8 cucumbers\n    When 2 cucumbers rot quickly\n    Then I should have 6 cucumbers\n\n  Scenario: Pending scenario, deliberately unimplemented\n    Given a step nobody has implemented yet\n\n  Scenario: Undefined step causes a failure\n    Given there are 3 cucumbers\n    When something undefined happens quickly\n    Then I should have 3 cucumbers\n',
      uri: 'features/parallel.feature',
      mediaType: 'text/x.cucumber.gherkin+plain',
    },
  },
  {
    gherkinDocument: {
      feature: {
        tags: [],
        location: {
          line: 1,
          column: 1,
        },
        language: 'en',
        keyword: 'Feature',
        name: 'Parallel cucumbers',
        description:
          '  Scenarios here are deliberately slow and of varying duration, so that running\n  them with multiple parallel workers produces genuine overlapping execution\n  windows and out-of-order completion - real data for testing timeline/worker\n  visualisations, rather than synthetic workerId assignment.',
        children: [
          {
            scenario: {
              id: '354c6c08-8d0e-4dfb-b9a4-c7f60a52a9ae',
              tags: [
                {
                  location: {
                    line: 7,
                    column: 3,
                  },
                  name: '@slow',
                  id: '31f1eacc-55d0-4369-81d7-d50093dd58b1',
                },
              ],
              location: {
                line: 8,
                column: 3,
              },
              keyword: 'Scenario',
              name: 'Eating a large batch of cucumbers',
              description: '',
              steps: [
                {
                  id: 'fa4cab55-d70a-4684-8e56-6ec141d13e0f',
                  location: {
                    line: 9,
                    column: 5,
                  },
                  keyword: 'Given ',
                  keywordType: 'Context',
                  text: 'there are 100 cucumbers',
                },
                {
                  id: '70df9f51-b7a3-4630-9467-4f709f14aa60',
                  location: {
                    line: 10,
                    column: 5,
                  },
                  keyword: 'When ',
                  keywordType: 'Action',
                  text: 'I eat 40 cucumbers slowly',
                },
                {
                  id: '1f7fe1e8-d074-4afc-8480-be9dd91cd10f',
                  location: {
                    line: 11,
                    column: 5,
                  },
                  keyword: 'Then ',
                  keywordType: 'Outcome',
                  text: 'I should have 60 cucumbers',
                },
              ],
              examples: [],
            },
          },
          {
            scenario: {
              id: '6e8905e4-a355-4e41-be7a-aa90466c37b1',
              tags: [],
              location: {
                line: 13,
                column: 3,
              },
              keyword: 'Scenario',
              name: 'Eating a small batch of cucumbers',
              description: '',
              steps: [
                {
                  id: 'c723745a-1674-43c9-89f0-0a35c95eb68d',
                  location: {
                    line: 14,
                    column: 5,
                  },
                  keyword: 'Given ',
                  keywordType: 'Context',
                  text: 'there are 10 cucumbers',
                },
                {
                  id: '03aaa9bf-eea4-4c39-8078-397dbcdfca96',
                  location: {
                    line: 15,
                    column: 5,
                  },
                  keyword: 'When ',
                  keywordType: 'Action',
                  text: 'I eat 3 cucumbers quickly',
                },
                {
                  id: '5370669c-df0b-49f0-99fd-9c55be564504',
                  location: {
                    line: 16,
                    column: 5,
                  },
                  keyword: 'Then ',
                  keywordType: 'Outcome',
                  text: 'I should have 7 cucumbers',
                },
              ],
              examples: [],
            },
          },
          {
            scenario: {
              id: 'b752b808-b6fa-415b-a8a9-2ee163fe5588',
              tags: [
                {
                  location: {
                    line: 18,
                    column: 3,
                  },
                  name: '@slow',
                  id: 'ff0f4633-827a-467e-bb5f-0ad5474439f5',
                },
              ],
              location: {
                line: 19,
                column: 3,
              },
              keyword: 'Scenario',
              name: 'Eating too many cucumbers',
              description: '',
              steps: [
                {
                  id: 'ea702224-305e-4c76-a0af-5639aa2b4732',
                  location: {
                    line: 20,
                    column: 5,
                  },
                  keyword: 'Given ',
                  keywordType: 'Context',
                  text: 'there are 5 cucumbers',
                },
                {
                  id: '7a3fe08e-0944-44ba-b0de-6abe20373d59',
                  location: {
                    line: 21,
                    column: 5,
                  },
                  keyword: 'When ',
                  keywordType: 'Action',
                  text: 'I eat 10 cucumbers slowly',
                },
                {
                  id: '456ab534-5369-4afa-8291-cba48b9fb880',
                  location: {
                    line: 22,
                    column: 5,
                  },
                  keyword: 'Then ',
                  keywordType: 'Outcome',
                  text: 'I should have 0 cucumbers',
                },
              ],
              examples: [],
            },
          },
          {
            scenario: {
              id: '8f565638-3554-4fa1-afe8-7e6a23dc7205',
              tags: [],
              location: {
                line: 24,
                column: 3,
              },
              keyword: 'Scenario',
              name: 'Sharing cucumbers with friends',
              description: '',
              steps: [
                {
                  id: '978d77df-0402-441d-a9c7-c7dd78f0d9b8',
                  location: {
                    line: 25,
                    column: 5,
                  },
                  keyword: 'Given ',
                  keywordType: 'Context',
                  text: 'there are 12 cucumbers',
                },
                {
                  id: 'b834ef00-403f-4c5f-8f77-7179c4b511bc',
                  location: {
                    line: 26,
                    column: 5,
                  },
                  keyword: 'And ',
                  keywordType: 'Conjunction',
                  text: 'there are 4 friends',
                },
                {
                  id: '4ca5dcc7-a5ba-4790-9964-4b05df3847e6',
                  location: {
                    line: 27,
                    column: 5,
                  },
                  keyword: 'When ',
                  keywordType: 'Action',
                  text: 'they share the cucumbers quickly',
                },
                {
                  id: '6fd0f196-462b-4af2-81f7-605ca8ccc33d',
                  location: {
                    line: 28,
                    column: 5,
                  },
                  keyword: 'Then ',
                  keywordType: 'Outcome',
                  text: 'each friend has 3 cucumbers',
                },
              ],
              examples: [],
            },
          },
          {
            scenario: {
              id: '1e1a205d-2bf1-4b6e-8524-94581a15cde2',
              tags: [
                {
                  location: {
                    line: 30,
                    column: 3,
                  },
                  name: '@slow',
                  id: 'b7924acf-dd78-4ac5-9b83-96aa07306408',
                },
              ],
              location: {
                line: 31,
                column: 3,
              },
              keyword: 'Scenario',
              name: 'Growing more cucumbers',
              description: '',
              steps: [
                {
                  id: 'ddaf02c5-7864-474b-8c5f-b9857aab94cc',
                  location: {
                    line: 32,
                    column: 5,
                  },
                  keyword: 'Given ',
                  keywordType: 'Context',
                  text: 'there are 0 cucumbers',
                },
                {
                  id: '905094bc-385f-4af8-8945-f0bdeece7309',
                  location: {
                    line: 33,
                    column: 5,
                  },
                  keyword: 'When ',
                  keywordType: 'Action',
                  text: '20 cucumbers grow slowly',
                },
                {
                  id: '6ab7573f-6366-4546-b147-872303d76c4e',
                  location: {
                    line: 34,
                    column: 5,
                  },
                  keyword: 'Then ',
                  keywordType: 'Outcome',
                  text: 'I should have 20 cucumbers',
                },
              ],
              examples: [],
            },
          },
          {
            scenario: {
              id: '11b1ac01-0aa0-41d3-bc19-0aae1a934dbf',
              tags: [],
              location: {
                line: 36,
                column: 3,
              },
              keyword: 'Scenario',
              name: 'Composting rotten cucumbers',
              description: '',
              steps: [
                {
                  id: '2fb41892-ada3-4697-8bdd-00c059fa8e9c',
                  location: {
                    line: 37,
                    column: 5,
                  },
                  keyword: 'Given ',
                  keywordType: 'Context',
                  text: 'there are 8 cucumbers',
                },
                {
                  id: '36c141c5-c9c9-4171-9f70-754c051ca649',
                  location: {
                    line: 38,
                    column: 5,
                  },
                  keyword: 'When ',
                  keywordType: 'Action',
                  text: '2 cucumbers rot quickly',
                },
                {
                  id: 'ed88d8ef-2a92-4c03-89da-b7196fda786d',
                  location: {
                    line: 39,
                    column: 5,
                  },
                  keyword: 'Then ',
                  keywordType: 'Outcome',
                  text: 'I should have 6 cucumbers',
                },
              ],
              examples: [],
            },
          },
          {
            scenario: {
              id: '8e0aa93b-5902-4259-9564-333e81191349',
              tags: [],
              location: {
                line: 41,
                column: 3,
              },
              keyword: 'Scenario',
              name: 'Pending scenario, deliberately unimplemented',
              description: '',
              steps: [
                {
                  id: '2611dea5-c661-4666-972d-5718b25eed10',
                  location: {
                    line: 42,
                    column: 5,
                  },
                  keyword: 'Given ',
                  keywordType: 'Context',
                  text: 'a step nobody has implemented yet',
                },
              ],
              examples: [],
            },
          },
          {
            scenario: {
              id: '5b9f15c5-2c62-416c-a697-15afe3ca9df5',
              tags: [],
              location: {
                line: 44,
                column: 3,
              },
              keyword: 'Scenario',
              name: 'Undefined step causes a failure',
              description: '',
              steps: [
                {
                  id: 'dde1e229-b5c2-4012-b0c5-b37f6e0cf1d4',
                  location: {
                    line: 45,
                    column: 5,
                  },
                  keyword: 'Given ',
                  keywordType: 'Context',
                  text: 'there are 3 cucumbers',
                },
                {
                  id: 'dbc9f2aa-8954-409c-830b-365710a3695c',
                  location: {
                    line: 46,
                    column: 5,
                  },
                  keyword: 'When ',
                  keywordType: 'Action',
                  text: 'something undefined happens quickly',
                },
                {
                  id: '1b7c9fda-8c60-4c17-81f0-eb37bb28d5d0',
                  location: {
                    line: 47,
                    column: 5,
                  },
                  keyword: 'Then ',
                  keywordType: 'Outcome',
                  text: 'I should have 3 cucumbers',
                },
              ],
              examples: [],
            },
          },
        ],
      },
      comments: [],
      uri: 'features/parallel.feature',
    },
  },
  {
    pickle: {
      id: 'c8de3bce-4d92-4c3b-a537-6fd7fbe4173b',
      uri: 'features/parallel.feature',
      location: {
        line: 8,
        column: 3,
      },
      astNodeIds: ['354c6c08-8d0e-4dfb-b9a4-c7f60a52a9ae'],
      tags: [
        {
          name: '@slow',
          astNodeId: '31f1eacc-55d0-4369-81d7-d50093dd58b1',
        },
      ],
      name: 'Eating a large batch of cucumbers',
      language: 'en',
      steps: [
        {
          id: '76196ede-b7e3-4650-8841-7df87255d9d7',
          text: 'there are 100 cucumbers',
          type: 'Context',
          astNodeIds: ['fa4cab55-d70a-4684-8e56-6ec141d13e0f'],
        },
        {
          id: '5275f02a-4a2b-4dfb-9114-fb0362ae7dcf',
          text: 'I eat 40 cucumbers slowly',
          type: 'Action',
          astNodeIds: ['70df9f51-b7a3-4630-9467-4f709f14aa60'],
        },
        {
          id: 'f9bff42d-4e09-49e0-81e9-fc4f8d481201',
          text: 'I should have 60 cucumbers',
          type: 'Outcome',
          astNodeIds: ['1f7fe1e8-d074-4afc-8480-be9dd91cd10f'],
        },
      ],
    },
  },
  {
    pickle: {
      id: 'bb9fcca0-2ed9-474f-b273-bd82cbb84f4f',
      uri: 'features/parallel.feature',
      location: {
        line: 13,
        column: 3,
      },
      astNodeIds: ['6e8905e4-a355-4e41-be7a-aa90466c37b1'],
      tags: [],
      name: 'Eating a small batch of cucumbers',
      language: 'en',
      steps: [
        {
          id: 'beb673d5-1cd2-4699-b585-3843f496d658',
          text: 'there are 10 cucumbers',
          type: 'Context',
          astNodeIds: ['c723745a-1674-43c9-89f0-0a35c95eb68d'],
        },
        {
          id: '7c135343-de6b-4998-8068-95a7a172bd83',
          text: 'I eat 3 cucumbers quickly',
          type: 'Action',
          astNodeIds: ['03aaa9bf-eea4-4c39-8078-397dbcdfca96'],
        },
        {
          id: '07a969e3-0a3c-4c9a-8fd4-b10e140148a6',
          text: 'I should have 7 cucumbers',
          type: 'Outcome',
          astNodeIds: ['5370669c-df0b-49f0-99fd-9c55be564504'],
        },
      ],
    },
  },
  {
    pickle: {
      id: 'b3b0ca98-82f6-43de-a8a6-929ebab784d9',
      uri: 'features/parallel.feature',
      location: {
        line: 19,
        column: 3,
      },
      astNodeIds: ['b752b808-b6fa-415b-a8a9-2ee163fe5588'],
      tags: [
        {
          name: '@slow',
          astNodeId: 'ff0f4633-827a-467e-bb5f-0ad5474439f5',
        },
      ],
      name: 'Eating too many cucumbers',
      language: 'en',
      steps: [
        {
          id: '6a1317bc-87a5-4344-a85d-e00c96f5b450',
          text: 'there are 5 cucumbers',
          type: 'Context',
          astNodeIds: ['ea702224-305e-4c76-a0af-5639aa2b4732'],
        },
        {
          id: 'd97573c4-93e9-41d1-99c2-ce53dbef8a65',
          text: 'I eat 10 cucumbers slowly',
          type: 'Action',
          astNodeIds: ['7a3fe08e-0944-44ba-b0de-6abe20373d59'],
        },
        {
          id: '486f8a42-0ca6-467c-a4c8-211a041d4145',
          text: 'I should have 0 cucumbers',
          type: 'Outcome',
          astNodeIds: ['456ab534-5369-4afa-8291-cba48b9fb880'],
        },
      ],
    },
  },
  {
    pickle: {
      id: '78e3e331-a7b4-406c-bc50-fad4557c4f87',
      uri: 'features/parallel.feature',
      location: {
        line: 24,
        column: 3,
      },
      astNodeIds: ['8f565638-3554-4fa1-afe8-7e6a23dc7205'],
      tags: [],
      name: 'Sharing cucumbers with friends',
      language: 'en',
      steps: [
        {
          id: 'fc6011e0-63e3-4605-bf62-73b0f86432c9',
          text: 'there are 12 cucumbers',
          type: 'Context',
          astNodeIds: ['978d77df-0402-441d-a9c7-c7dd78f0d9b8'],
        },
        {
          id: '44ac77ac-cedb-43c1-a9ec-f043422f7716',
          text: 'there are 4 friends',
          type: 'Context',
          astNodeIds: ['b834ef00-403f-4c5f-8f77-7179c4b511bc'],
        },
        {
          id: 'f557aa7b-4857-4130-b5f5-b29701dea164',
          text: 'they share the cucumbers quickly',
          type: 'Action',
          astNodeIds: ['4ca5dcc7-a5ba-4790-9964-4b05df3847e6'],
        },
        {
          id: 'ebbd0993-0eba-4b3e-b4c0-68e51acb441d',
          text: 'each friend has 3 cucumbers',
          type: 'Outcome',
          astNodeIds: ['6fd0f196-462b-4af2-81f7-605ca8ccc33d'],
        },
      ],
    },
  },
  {
    pickle: {
      id: '6a696a87-eb49-4f84-85d5-70811cb0371f',
      uri: 'features/parallel.feature',
      location: {
        line: 31,
        column: 3,
      },
      astNodeIds: ['1e1a205d-2bf1-4b6e-8524-94581a15cde2'],
      tags: [
        {
          name: '@slow',
          astNodeId: 'b7924acf-dd78-4ac5-9b83-96aa07306408',
        },
      ],
      name: 'Growing more cucumbers',
      language: 'en',
      steps: [
        {
          id: '11001e15-4167-423c-8f14-b0feb47c185e',
          text: 'there are 0 cucumbers',
          type: 'Context',
          astNodeIds: ['ddaf02c5-7864-474b-8c5f-b9857aab94cc'],
        },
        {
          id: 'b03b3f6a-7c8c-4647-b445-1b5d59a752fe',
          text: '20 cucumbers grow slowly',
          type: 'Action',
          astNodeIds: ['905094bc-385f-4af8-8945-f0bdeece7309'],
        },
        {
          id: '408d7f67-d701-4274-b386-7fc61e564fb6',
          text: 'I should have 20 cucumbers',
          type: 'Outcome',
          astNodeIds: ['6ab7573f-6366-4546-b147-872303d76c4e'],
        },
      ],
    },
  },
  {
    pickle: {
      id: '5a2777ad-4eb7-41ba-9dda-28e24a262de6',
      uri: 'features/parallel.feature',
      location: {
        line: 36,
        column: 3,
      },
      astNodeIds: ['11b1ac01-0aa0-41d3-bc19-0aae1a934dbf'],
      tags: [],
      name: 'Composting rotten cucumbers',
      language: 'en',
      steps: [
        {
          id: '18c70fcf-3e57-4d9d-b40d-059a86cf8eae',
          text: 'there are 8 cucumbers',
          type: 'Context',
          astNodeIds: ['2fb41892-ada3-4697-8bdd-00c059fa8e9c'],
        },
        {
          id: 'ef351656-0bf9-4363-8b1a-3666643695a8',
          text: '2 cucumbers rot quickly',
          type: 'Action',
          astNodeIds: ['36c141c5-c9c9-4171-9f70-754c051ca649'],
        },
        {
          id: '9f9d5f99-79a9-49b3-b878-a1c1ad11a465',
          text: 'I should have 6 cucumbers',
          type: 'Outcome',
          astNodeIds: ['ed88d8ef-2a92-4c03-89da-b7196fda786d'],
        },
      ],
    },
  },
  {
    pickle: {
      id: '4e7b3395-cfd6-44ff-97a6-8780124ceb5c',
      uri: 'features/parallel.feature',
      location: {
        line: 41,
        column: 3,
      },
      astNodeIds: ['8e0aa93b-5902-4259-9564-333e81191349'],
      tags: [],
      name: 'Pending scenario, deliberately unimplemented',
      language: 'en',
      steps: [
        {
          id: '0fb61a73-647b-490d-89a2-d71e87435f14',
          text: 'a step nobody has implemented yet',
          type: 'Context',
          astNodeIds: ['2611dea5-c661-4666-972d-5718b25eed10'],
        },
      ],
    },
  },
  {
    pickle: {
      id: '4af89957-f40d-4491-b9eb-c269c9043a2e',
      uri: 'features/parallel.feature',
      location: {
        line: 44,
        column: 3,
      },
      astNodeIds: ['5b9f15c5-2c62-416c-a697-15afe3ca9df5'],
      tags: [],
      name: 'Undefined step causes a failure',
      language: 'en',
      steps: [
        {
          id: '6694ed52-ef9b-415d-97e9-2d348fbd3c65',
          text: 'there are 3 cucumbers',
          type: 'Context',
          astNodeIds: ['dde1e229-b5c2-4012-b0c5-b37f6e0cf1d4'],
        },
        {
          id: '2a57b067-73b9-400a-8e96-a447289f116b',
          text: 'something undefined happens quickly',
          type: 'Action',
          astNodeIds: ['dbc9f2aa-8954-409c-830b-365710a3695c'],
        },
        {
          id: '8f29d626-1133-472b-8777-49f44034a562',
          text: 'I should have 3 cucumbers',
          type: 'Outcome',
          astNodeIds: ['1b7c9fda-8c60-4c17-81f0-eb37bb28d5d0'],
        },
      ],
    },
  },
  {
    stepDefinition: {
      id: 'c7f0072f-0784-4495-abeb-61b9b30c30b1',
      pattern: {
        source: 'there are {int} cucumbers',
        type: 'CUCUMBER_EXPRESSION',
      },
      sourceReference: {
        uri: 'features/step_definitions/steps.js',
        location: {
          line: 10,
        },
      },
    },
  },
  {
    stepDefinition: {
      id: '5f8e8c33-c92a-423d-b6de-30e2a6c83658',
      pattern: {
        source: 'there are {int} friends',
        type: 'CUCUMBER_EXPRESSION',
      },
      sourceReference: {
        uri: 'features/step_definitions/steps.js',
        location: {
          line: 14,
        },
      },
    },
  },
  {
    stepDefinition: {
      id: '6a4e4830-a1f2-4951-92b6-05b4bad19977',
      pattern: {
        source: 'I eat {int} cucumbers slowly',
        type: 'CUCUMBER_EXPRESSION',
      },
      sourceReference: {
        uri: 'features/step_definitions/steps.js',
        location: {
          line: 18,
        },
      },
    },
  },
  {
    stepDefinition: {
      id: 'e84bf66f-1f5d-47f1-bc44-362602f3c9a1',
      pattern: {
        source: 'I eat {int} cucumbers quickly',
        type: 'CUCUMBER_EXPRESSION',
      },
      sourceReference: {
        uri: 'features/step_definitions/steps.js',
        location: {
          line: 23,
        },
      },
    },
  },
  {
    stepDefinition: {
      id: '25c5a5c8-b579-47af-88d5-92ed9d872569',
      pattern: {
        source: 'they share the cucumbers quickly',
        type: 'CUCUMBER_EXPRESSION',
      },
      sourceReference: {
        uri: 'features/step_definitions/steps.js',
        location: {
          line: 28,
        },
      },
    },
  },
  {
    stepDefinition: {
      id: 'd2a119f5-aadb-4ca5-86c5-9ba36f7cf6c0',
      pattern: {
        source: '{int} cucumbers grow slowly',
        type: 'CUCUMBER_EXPRESSION',
      },
      sourceReference: {
        uri: 'features/step_definitions/steps.js',
        location: {
          line: 33,
        },
      },
    },
  },
  {
    stepDefinition: {
      id: 'e9f1b00c-57c5-40b1-89d1-1c45695cfda6',
      pattern: {
        source: '{int} cucumbers rot quickly',
        type: 'CUCUMBER_EXPRESSION',
      },
      sourceReference: {
        uri: 'features/step_definitions/steps.js',
        location: {
          line: 38,
        },
      },
    },
  },
  {
    stepDefinition: {
      id: '912a9a20-8a6c-410a-ae5d-06f578ed4cc4',
      pattern: {
        source: 'I should have {int} cucumbers',
        type: 'CUCUMBER_EXPRESSION',
      },
      sourceReference: {
        uri: 'features/step_definitions/steps.js',
        location: {
          line: 43,
        },
      },
    },
  },
  {
    stepDefinition: {
      id: '2e52693a-6da7-4238-84e4-a2fddcf5b7ee',
      pattern: {
        source: 'each friend has {int} cucumbers',
        type: 'CUCUMBER_EXPRESSION',
      },
      sourceReference: {
        uri: 'features/step_definitions/steps.js',
        location: {
          line: 47,
        },
      },
    },
  },
  {
    stepDefinition: {
      id: 'bbc5cd06-cae7-419e-b105-a65029b1ad87',
      pattern: {
        source: 'a step nobody has implemented yet',
        type: 'CUCUMBER_EXPRESSION',
      },
      sourceReference: {
        uri: 'features/step_definitions/steps.js',
        location: {
          line: 51,
        },
      },
    },
  },
  {
    testRunStarted: {
      id: '4a5220c9-a353-4dd4-8b90-b9782be3c501',
      timestamp: {
        seconds: 1783361610,
        nanos: 722000000,
      },
    },
  },
  {
    testCase: {
      testRunStartedId: '4a5220c9-a353-4dd4-8b90-b9782be3c501',
      pickleId: 'bb9fcca0-2ed9-474f-b273-bd82cbb84f4f',
      id: 'b3f72b00-3fe1-4d6c-a86c-bfa5fac66742',
      testSteps: [
        {
          id: '357f517d-6277-4e7b-8625-9b162c5c822c',
          pickleStepId: 'beb673d5-1cd2-4699-b585-3843f496d658',
          stepDefinitionIds: ['c7f0072f-0784-4495-abeb-61b9b30c30b1'],
          stepMatchArgumentsLists: [
            {
              stepMatchArguments: [
                {
                  group: {
                    start: 10,
                    value: '10',
                  },
                  parameterTypeName: 'int',
                },
              ],
            },
          ],
        },
        {
          id: '3c01ba1e-4501-4d64-842d-88287c974852',
          pickleStepId: '7c135343-de6b-4998-8068-95a7a172bd83',
          stepDefinitionIds: ['e84bf66f-1f5d-47f1-bc44-362602f3c9a1'],
          stepMatchArgumentsLists: [
            {
              stepMatchArguments: [
                {
                  group: {
                    start: 6,
                    value: '3',
                  },
                  parameterTypeName: 'int',
                },
              ],
            },
          ],
        },
        {
          id: 'd2d47664-5e9e-4ea8-bdb2-693e6adc0055',
          pickleStepId: '07a969e3-0a3c-4c9a-8fd4-b10e140148a6',
          stepDefinitionIds: ['912a9a20-8a6c-410a-ae5d-06f578ed4cc4'],
          stepMatchArgumentsLists: [
            {
              stepMatchArguments: [
                {
                  group: {
                    start: 14,
                    value: '7',
                  },
                  parameterTypeName: 'int',
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    testCase: {
      testRunStartedId: '4a5220c9-a353-4dd4-8b90-b9782be3c501',
      pickleId: '6a696a87-eb49-4f84-85d5-70811cb0371f',
      id: '34384936-b250-4869-afc6-730e24338008',
      testSteps: [
        {
          id: '1e2f2602-22cc-4b6b-9c3a-8d81ffae6922',
          pickleStepId: '11001e15-4167-423c-8f14-b0feb47c185e',
          stepDefinitionIds: ['c7f0072f-0784-4495-abeb-61b9b30c30b1'],
          stepMatchArgumentsLists: [
            {
              stepMatchArguments: [
                {
                  group: {
                    start: 10,
                    value: '0',
                  },
                  parameterTypeName: 'int',
                },
              ],
            },
          ],
        },
        {
          id: 'f5f5f674-6eeb-43d4-a5a2-b6ad70a9d156',
          pickleStepId: 'b03b3f6a-7c8c-4647-b445-1b5d59a752fe',
          stepDefinitionIds: ['d2a119f5-aadb-4ca5-86c5-9ba36f7cf6c0'],
          stepMatchArgumentsLists: [
            {
              stepMatchArguments: [
                {
                  group: {
                    start: 0,
                    value: '20',
                  },
                  parameterTypeName: 'int',
                },
              ],
            },
          ],
        },
        {
          id: '9f70df84-bee3-43f0-bc62-e317f27ecb7f',
          pickleStepId: '408d7f67-d701-4274-b386-7fc61e564fb6',
          stepDefinitionIds: ['912a9a20-8a6c-410a-ae5d-06f578ed4cc4'],
          stepMatchArgumentsLists: [
            {
              stepMatchArguments: [
                {
                  group: {
                    start: 14,
                    value: '20',
                  },
                  parameterTypeName: 'int',
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    testCase: {
      testRunStartedId: '4a5220c9-a353-4dd4-8b90-b9782be3c501',
      pickleId: 'b3b0ca98-82f6-43de-a8a6-929ebab784d9',
      id: 'dc2c832b-7e44-41a0-a083-4efea8460f39',
      testSteps: [
        {
          id: 'bd4f25e0-e34a-411c-8b53-b2f5217a9e05',
          pickleStepId: '6a1317bc-87a5-4344-a85d-e00c96f5b450',
          stepDefinitionIds: ['c7f0072f-0784-4495-abeb-61b9b30c30b1'],
          stepMatchArgumentsLists: [
            {
              stepMatchArguments: [
                {
                  group: {
                    start: 10,
                    value: '5',
                  },
                  parameterTypeName: 'int',
                },
              ],
            },
          ],
        },
        {
          id: '31eb799c-17cc-4055-881a-84b81e8c9c3e',
          pickleStepId: 'd97573c4-93e9-41d1-99c2-ce53dbef8a65',
          stepDefinitionIds: ['6a4e4830-a1f2-4951-92b6-05b4bad19977'],
          stepMatchArgumentsLists: [
            {
              stepMatchArguments: [
                {
                  group: {
                    start: 6,
                    value: '10',
                  },
                  parameterTypeName: 'int',
                },
              ],
            },
          ],
        },
        {
          id: '73e496f0-dbd8-4adf-976e-78332c50bef7',
          pickleStepId: '486f8a42-0ca6-467c-a4c8-211a041d4145',
          stepDefinitionIds: ['912a9a20-8a6c-410a-ae5d-06f578ed4cc4'],
          stepMatchArgumentsLists: [
            {
              stepMatchArguments: [
                {
                  group: {
                    start: 14,
                    value: '0',
                  },
                  parameterTypeName: 'int',
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    testCase: {
      testRunStartedId: '4a5220c9-a353-4dd4-8b90-b9782be3c501',
      pickleId: 'c8de3bce-4d92-4c3b-a537-6fd7fbe4173b',
      id: '8d63f41b-37fe-4753-aa8a-be53112779a3',
      testSteps: [
        {
          id: '3cc461f5-2ed9-47a0-abd8-765d3ae0b5c3',
          pickleStepId: '76196ede-b7e3-4650-8841-7df87255d9d7',
          stepDefinitionIds: ['c7f0072f-0784-4495-abeb-61b9b30c30b1'],
          stepMatchArgumentsLists: [
            {
              stepMatchArguments: [
                {
                  group: {
                    start: 10,
                    value: '100',
                  },
                  parameterTypeName: 'int',
                },
              ],
            },
          ],
        },
        {
          id: 'e5d9da74-769d-47f4-beff-5e2f7a76e034',
          pickleStepId: '5275f02a-4a2b-4dfb-9114-fb0362ae7dcf',
          stepDefinitionIds: ['6a4e4830-a1f2-4951-92b6-05b4bad19977'],
          stepMatchArgumentsLists: [
            {
              stepMatchArguments: [
                {
                  group: {
                    start: 6,
                    value: '40',
                  },
                  parameterTypeName: 'int',
                },
              ],
            },
          ],
        },
        {
          id: '086db806-de45-4fca-86b8-72cd981e9217',
          pickleStepId: 'f9bff42d-4e09-49e0-81e9-fc4f8d481201',
          stepDefinitionIds: ['912a9a20-8a6c-410a-ae5d-06f578ed4cc4'],
          stepMatchArgumentsLists: [
            {
              stepMatchArguments: [
                {
                  group: {
                    start: 14,
                    value: '60',
                  },
                  parameterTypeName: 'int',
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    testCase: {
      testRunStartedId: '4a5220c9-a353-4dd4-8b90-b9782be3c501',
      pickleId: '78e3e331-a7b4-406c-bc50-fad4557c4f87',
      id: '9be98196-670f-4bf8-b10e-e61fb30e96db',
      testSteps: [
        {
          id: '8a8ea0ab-eaeb-437c-98fc-adfa2b349d01',
          pickleStepId: 'fc6011e0-63e3-4605-bf62-73b0f86432c9',
          stepDefinitionIds: ['c7f0072f-0784-4495-abeb-61b9b30c30b1'],
          stepMatchArgumentsLists: [
            {
              stepMatchArguments: [
                {
                  group: {
                    start: 10,
                    value: '12',
                  },
                  parameterTypeName: 'int',
                },
              ],
            },
          ],
        },
        {
          id: '2faa8ec0-9f2c-43e0-bf88-5d196a957097',
          pickleStepId: '44ac77ac-cedb-43c1-a9ec-f043422f7716',
          stepDefinitionIds: ['5f8e8c33-c92a-423d-b6de-30e2a6c83658'],
          stepMatchArgumentsLists: [
            {
              stepMatchArguments: [
                {
                  group: {
                    start: 10,
                    value: '4',
                  },
                  parameterTypeName: 'int',
                },
              ],
            },
          ],
        },
        {
          id: '4981082d-65a5-4e67-9068-47d5f0d36956',
          pickleStepId: 'f557aa7b-4857-4130-b5f5-b29701dea164',
          stepDefinitionIds: ['25c5a5c8-b579-47af-88d5-92ed9d872569'],
          stepMatchArgumentsLists: [
            {
              stepMatchArguments: [],
            },
          ],
        },
        {
          id: '0d8c2933-1e5c-4479-a6f9-34c71c77f0c4',
          pickleStepId: 'ebbd0993-0eba-4b3e-b4c0-68e51acb441d',
          stepDefinitionIds: ['2e52693a-6da7-4238-84e4-a2fddcf5b7ee'],
          stepMatchArgumentsLists: [
            {
              stepMatchArguments: [
                {
                  group: {
                    start: 16,
                    value: '3',
                  },
                  parameterTypeName: 'int',
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    testCase: {
      testRunStartedId: '4a5220c9-a353-4dd4-8b90-b9782be3c501',
      pickleId: '4e7b3395-cfd6-44ff-97a6-8780124ceb5c',
      id: '4e56d0d2-d181-4718-b9e8-9cc5e3a27f82',
      testSteps: [
        {
          id: '95829b85-5c28-4191-b951-abe86c0f3c2e',
          pickleStepId: '0fb61a73-647b-490d-89a2-d71e87435f14',
          stepDefinitionIds: ['bbc5cd06-cae7-419e-b105-a65029b1ad87'],
          stepMatchArgumentsLists: [
            {
              stepMatchArguments: [],
            },
          ],
        },
      ],
    },
  },
  {
    testCase: {
      testRunStartedId: '4a5220c9-a353-4dd4-8b90-b9782be3c501',
      pickleId: '5a2777ad-4eb7-41ba-9dda-28e24a262de6',
      id: '0ca779f9-70e7-4280-b138-d12962b6c4a7',
      testSteps: [
        {
          id: '01b03519-ec11-4ce1-a1ed-42ac8d27e6b1',
          pickleStepId: '18c70fcf-3e57-4d9d-b40d-059a86cf8eae',
          stepDefinitionIds: ['c7f0072f-0784-4495-abeb-61b9b30c30b1'],
          stepMatchArgumentsLists: [
            {
              stepMatchArguments: [
                {
                  group: {
                    start: 10,
                    value: '8',
                  },
                  parameterTypeName: 'int',
                },
              ],
            },
          ],
        },
        {
          id: 'b3216379-bb91-4bfd-9cae-6dd43d2df1b8',
          pickleStepId: 'ef351656-0bf9-4363-8b1a-3666643695a8',
          stepDefinitionIds: ['e9f1b00c-57c5-40b1-89d1-1c45695cfda6'],
          stepMatchArgumentsLists: [
            {
              stepMatchArguments: [
                {
                  group: {
                    start: 0,
                    value: '2',
                  },
                  parameterTypeName: 'int',
                },
              ],
            },
          ],
        },
        {
          id: '7207fb52-ef0d-4aba-8635-278c5c597657',
          pickleStepId: '9f9d5f99-79a9-49b3-b878-a1c1ad11a465',
          stepDefinitionIds: ['912a9a20-8a6c-410a-ae5d-06f578ed4cc4'],
          stepMatchArgumentsLists: [
            {
              stepMatchArguments: [
                {
                  group: {
                    start: 14,
                    value: '6',
                  },
                  parameterTypeName: 'int',
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    testCase: {
      testRunStartedId: '4a5220c9-a353-4dd4-8b90-b9782be3c501',
      pickleId: '4af89957-f40d-4491-b9eb-c269c9043a2e',
      id: '13ee0fb0-9f60-4e76-97e2-4e450ef3c825',
      testSteps: [
        {
          id: '0ba81835-6500-4832-8044-c609e74d99f9',
          pickleStepId: '6694ed52-ef9b-415d-97e9-2d348fbd3c65',
          stepDefinitionIds: ['c7f0072f-0784-4495-abeb-61b9b30c30b1'],
          stepMatchArgumentsLists: [
            {
              stepMatchArguments: [
                {
                  group: {
                    start: 10,
                    value: '3',
                  },
                  parameterTypeName: 'int',
                },
              ],
            },
          ],
        },
        {
          id: '80d444c1-c59a-49d6-a6d4-826397079a7c',
          pickleStepId: '2a57b067-73b9-400a-8e96-a447289f116b',
          stepDefinitionIds: [],
          stepMatchArgumentsLists: [],
        },
        {
          id: '4cb73b40-c005-46f5-8f57-33738d123619',
          pickleStepId: '8f29d626-1133-472b-8777-49f44034a562',
          stepDefinitionIds: ['912a9a20-8a6c-410a-ae5d-06f578ed4cc4'],
          stepMatchArgumentsLists: [
            {
              stepMatchArguments: [
                {
                  group: {
                    start: 14,
                    value: '3',
                  },
                  parameterTypeName: 'int',
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    testCaseStarted: {
      attempt: 0,
      testCaseId: 'b3f72b00-3fe1-4d6c-a86c-bfa5fac66742',
      id: '8360df38-2f75-4d81-9b69-c9e53bde1f9e',
      timestamp: {
        seconds: 1783361611,
        nanos: 434000000,
      },
      workerId: '0',
    },
  },
  {
    testStepStarted: {
      testCaseStartedId: '8360df38-2f75-4d81-9b69-c9e53bde1f9e',
      testStepId: '357f517d-6277-4e7b-8625-9b162c5c822c',
      timestamp: {
        seconds: 1783361611,
        nanos: 435000000,
      },
    },
  },
  {
    testCaseStarted: {
      attempt: 0,
      testCaseId: '34384936-b250-4869-afc6-730e24338008',
      id: '4c194c00-5b09-45b7-a954-c4a4664c998b',
      timestamp: {
        seconds: 1783361611,
        nanos: 441000000,
      },
      workerId: '1',
    },
  },
  {
    testStepStarted: {
      testCaseStartedId: '4c194c00-5b09-45b7-a954-c4a4664c998b',
      testStepId: '1e2f2602-22cc-4b6b-9c3a-8d81ffae6922',
      timestamp: {
        seconds: 1783361611,
        nanos: 441000000,
      },
    },
  },
  {
    testStepFinished: {
      testCaseStartedId: '8360df38-2f75-4d81-9b69-c9e53bde1f9e',
      testStepId: '357f517d-6277-4e7b-8625-9b162c5c822c',
      testStepResult: {
        duration: {
          seconds: 0,
          nanos: 24456227,
        },
        status: 'PASSED',
      },
      timestamp: {
        seconds: 1783361611,
        nanos: 460000000,
      },
    },
  },
  {
    testStepStarted: {
      testCaseStartedId: '8360df38-2f75-4d81-9b69-c9e53bde1f9e',
      testStepId: '3c01ba1e-4501-4d64-842d-88287c974852',
      timestamp: {
        seconds: 1783361611,
        nanos: 468000000,
      },
    },
  },
  {
    testStepFinished: {
      testCaseStartedId: '4c194c00-5b09-45b7-a954-c4a4664c998b',
      testStepId: '1e2f2602-22cc-4b6b-9c3a-8d81ffae6922',
      testStepResult: {
        duration: {
          seconds: 0,
          nanos: 22248694,
        },
        status: 'PASSED',
      },
      timestamp: {
        seconds: 1783361611,
        nanos: 464000000,
      },
    },
  },
  {
    testStepStarted: {
      testCaseStartedId: '4c194c00-5b09-45b7-a954-c4a4664c998b',
      testStepId: 'f5f5f674-6eeb-43d4-a5a2-b6ad70a9d156',
      timestamp: {
        seconds: 1783361611,
        nanos: 464000000,
      },
    },
  },
  {
    testStepFinished: {
      testCaseStartedId: '8360df38-2f75-4d81-9b69-c9e53bde1f9e',
      testStepId: '3c01ba1e-4501-4d64-842d-88287c974852',
      testStepResult: {
        duration: {
          seconds: 0,
          nanos: 144869860,
        },
        status: 'PASSED',
      },
      timestamp: {
        seconds: 1783361611,
        nanos: 613000000,
      },
    },
  },
  {
    testStepStarted: {
      testCaseStartedId: '8360df38-2f75-4d81-9b69-c9e53bde1f9e',
      testStepId: 'd2d47664-5e9e-4ea8-bdb2-693e6adc0055',
      timestamp: {
        seconds: 1783361611,
        nanos: 615000000,
      },
    },
  },
  {
    testStepFinished: {
      testCaseStartedId: '8360df38-2f75-4d81-9b69-c9e53bde1f9e',
      testStepId: 'd2d47664-5e9e-4ea8-bdb2-693e6adc0055',
      testStepResult: {
        duration: {
          seconds: 0,
          nanos: 2681436,
        },
        status: 'PASSED',
      },
      timestamp: {
        seconds: 1783361611,
        nanos: 618000000,
      },
    },
  },
  {
    testCaseFinished: {
      testCaseStartedId: '8360df38-2f75-4d81-9b69-c9e53bde1f9e',
      timestamp: {
        seconds: 1783361611,
        nanos: 618000000,
      },
      willBeRetried: false,
    },
  },
  {
    testCaseStarted: {
      attempt: 0,
      testCaseId: 'dc2c832b-7e44-41a0-a083-4efea8460f39',
      id: '2793b461-6b35-417b-b9b0-a080fd3bfb22',
      timestamp: {
        seconds: 1783361611,
        nanos: 619000000,
      },
      workerId: '0',
    },
  },
  {
    testStepStarted: {
      testCaseStartedId: '2793b461-6b35-417b-b9b0-a080fd3bfb22',
      testStepId: 'bd4f25e0-e34a-411c-8b53-b2f5217a9e05',
      timestamp: {
        seconds: 1783361611,
        nanos: 619000000,
      },
    },
  },
  {
    testStepFinished: {
      testCaseStartedId: '2793b461-6b35-417b-b9b0-a080fd3bfb22',
      testStepId: 'bd4f25e0-e34a-411c-8b53-b2f5217a9e05',
      testStepResult: {
        duration: {
          seconds: 0,
          nanos: 229134,
        },
        status: 'PASSED',
      },
      timestamp: {
        seconds: 1783361611,
        nanos: 620000000,
      },
    },
  },
  {
    testStepStarted: {
      testCaseStartedId: '2793b461-6b35-417b-b9b0-a080fd3bfb22',
      testStepId: '31eb799c-17cc-4055-881a-84b81e8c9c3e',
      timestamp: {
        seconds: 1783361611,
        nanos: 620000000,
      },
    },
  },
  {
    testStepFinished: {
      testCaseStartedId: '4c194c00-5b09-45b7-a954-c4a4664c998b',
      testStepId: 'f5f5f674-6eeb-43d4-a5a2-b6ad70a9d156',
      testStepResult: {
        duration: {
          seconds: 0,
          nanos: 427437877,
        },
        status: 'PASSED',
      },
      timestamp: {
        seconds: 1783361611,
        nanos: 892000000,
      },
    },
  },
  {
    testStepStarted: {
      testCaseStartedId: '4c194c00-5b09-45b7-a954-c4a4664c998b',
      testStepId: '9f70df84-bee3-43f0-bc62-e317f27ecb7f',
      timestamp: {
        seconds: 1783361611,
        nanos: 892000000,
      },
    },
  },
  {
    testStepFinished: {
      testCaseStartedId: '4c194c00-5b09-45b7-a954-c4a4664c998b',
      testStepId: '9f70df84-bee3-43f0-bc62-e317f27ecb7f',
      testStepResult: {
        duration: {
          seconds: 0,
          nanos: 2500385,
        },
        status: 'PASSED',
      },
      timestamp: {
        seconds: 1783361611,
        nanos: 895000000,
      },
    },
  },
  {
    testCaseFinished: {
      testCaseStartedId: '4c194c00-5b09-45b7-a954-c4a4664c998b',
      timestamp: {
        seconds: 1783361611,
        nanos: 895000000,
      },
      willBeRetried: false,
    },
  },
  {
    testCaseStarted: {
      attempt: 0,
      testCaseId: '8d63f41b-37fe-4753-aa8a-be53112779a3',
      id: 'a62eb05b-2582-4ea4-9b82-334cffb27087',
      timestamp: {
        seconds: 1783361611,
        nanos: 895000000,
      },
      workerId: '1',
    },
  },
  {
    testStepStarted: {
      testCaseStartedId: 'a62eb05b-2582-4ea4-9b82-334cffb27087',
      testStepId: '3cc461f5-2ed9-47a0-abd8-765d3ae0b5c3',
      timestamp: {
        seconds: 1783361611,
        nanos: 895000000,
      },
    },
  },
  {
    testStepFinished: {
      testCaseStartedId: 'a62eb05b-2582-4ea4-9b82-334cffb27087',
      testStepId: '3cc461f5-2ed9-47a0-abd8-765d3ae0b5c3',
      testStepResult: {
        duration: {
          seconds: 0,
          nanos: 212614,
        },
        status: 'PASSED',
      },
      timestamp: {
        seconds: 1783361611,
        nanos: 896000000,
      },
    },
  },
  {
    testStepStarted: {
      testCaseStartedId: 'a62eb05b-2582-4ea4-9b82-334cffb27087',
      testStepId: 'e5d9da74-769d-47f4-beff-5e2f7a76e034',
      timestamp: {
        seconds: 1783361611,
        nanos: 896000000,
      },
    },
  },
  {
    testStepFinished: {
      testCaseStartedId: '2793b461-6b35-417b-b9b0-a080fd3bfb22',
      testStepId: '31eb799c-17cc-4055-881a-84b81e8c9c3e',
      testStepResult: {
        duration: {
          seconds: 0,
          nanos: 426928356,
        },
        status: 'PASSED',
      },
      timestamp: {
        seconds: 1783361612,
        nanos: 47000000,
      },
    },
  },
  {
    testStepStarted: {
      testCaseStartedId: '2793b461-6b35-417b-b9b0-a080fd3bfb22',
      testStepId: '73e496f0-dbd8-4adf-976e-78332c50bef7',
      timestamp: {
        seconds: 1783361612,
        nanos: 48000000,
      },
    },
  },
  {
    testStepFinished: {
      testCaseStartedId: '2793b461-6b35-417b-b9b0-a080fd3bfb22',
      testStepId: '73e496f0-dbd8-4adf-976e-78332c50bef7',
      testStepResult: {
        duration: {
          seconds: 0,
          nanos: 1361045,
        },
        status: 'FAILED',
        message:
          'AssertionError [ERR_ASSERTION]: Expected values to be strictly equal:\n\n-5 !== 0\n\n    + expected - actual\n\n    --5\n    +0\n\n    at World.<anonymous> (/home/claude/parallel-fixture/features/step_definitions/steps.js:44:10)',
        exception: {
          type: 'AssertionError',
          message: 'Expected values to be strictly equal:\n\n-5 !== 0\n',
          stackTrace:
            'AssertionError [ERR_ASSERTION]: Expected values to be strictly equal:\n\n-5 !== 0\n\n    + expected - actual\n\n    --5\n    +0\n\n    at World.<anonymous> (/home/claude/parallel-fixture/features/step_definitions/steps.js:44:10)',
        },
      },
      timestamp: {
        seconds: 1783361612,
        nanos: 52000000,
      },
    },
  },
  {
    testCaseFinished: {
      testCaseStartedId: '2793b461-6b35-417b-b9b0-a080fd3bfb22',
      timestamp: {
        seconds: 1783361612,
        nanos: 52000000,
      },
      willBeRetried: false,
    },
  },
  {
    testCaseStarted: {
      attempt: 0,
      testCaseId: '9be98196-670f-4bf8-b10e-e61fb30e96db',
      id: '888658c4-2935-40bb-b0ca-aacea86c84fd',
      timestamp: {
        seconds: 1783361612,
        nanos: 53000000,
      },
      workerId: '0',
    },
  },
  {
    testStepStarted: {
      testCaseStartedId: '888658c4-2935-40bb-b0ca-aacea86c84fd',
      testStepId: '8a8ea0ab-eaeb-437c-98fc-adfa2b349d01',
      timestamp: {
        seconds: 1783361612,
        nanos: 53000000,
      },
    },
  },
  {
    testStepFinished: {
      testCaseStartedId: '888658c4-2935-40bb-b0ca-aacea86c84fd',
      testStepId: '8a8ea0ab-eaeb-437c-98fc-adfa2b349d01',
      testStepResult: {
        duration: {
          seconds: 0,
          nanos: 230890,
        },
        status: 'PASSED',
      },
      timestamp: {
        seconds: 1783361612,
        nanos: 53000000,
      },
    },
  },
  {
    testStepStarted: {
      testCaseStartedId: '888658c4-2935-40bb-b0ca-aacea86c84fd',
      testStepId: '2faa8ec0-9f2c-43e0-bf88-5d196a957097',
      timestamp: {
        seconds: 1783361612,
        nanos: 53000000,
      },
    },
  },
  {
    testStepFinished: {
      testCaseStartedId: '888658c4-2935-40bb-b0ca-aacea86c84fd',
      testStepId: '2faa8ec0-9f2c-43e0-bf88-5d196a957097',
      testStepResult: {
        duration: {
          seconds: 0,
          nanos: 4165209,
        },
        status: 'PASSED',
      },
      timestamp: {
        seconds: 1783361612,
        nanos: 57000000,
      },
    },
  },
  {
    testStepStarted: {
      testCaseStartedId: '888658c4-2935-40bb-b0ca-aacea86c84fd',
      testStepId: '4981082d-65a5-4e67-9068-47d5f0d36956',
      timestamp: {
        seconds: 1783361612,
        nanos: 57000000,
      },
    },
  },
  {
    testStepFinished: {
      testCaseStartedId: '888658c4-2935-40bb-b0ca-aacea86c84fd',
      testStepId: '4981082d-65a5-4e67-9068-47d5f0d36956',
      testStepResult: {
        duration: {
          seconds: 0,
          nanos: 138522152,
        },
        status: 'PASSED',
      },
      timestamp: {
        seconds: 1783361612,
        nanos: 196000000,
      },
    },
  },
  {
    testStepStarted: {
      testCaseStartedId: '888658c4-2935-40bb-b0ca-aacea86c84fd',
      testStepId: '0d8c2933-1e5c-4479-a6f9-34c71c77f0c4',
      timestamp: {
        seconds: 1783361612,
        nanos: 197000000,
      },
    },
  },
  {
    testStepFinished: {
      testCaseStartedId: '888658c4-2935-40bb-b0ca-aacea86c84fd',
      testStepId: '0d8c2933-1e5c-4479-a6f9-34c71c77f0c4',
      testStepResult: {
        duration: {
          seconds: 0,
          nanos: 964183,
        },
        status: 'PASSED',
      },
      timestamp: {
        seconds: 1783361612,
        nanos: 198000000,
      },
    },
  },
  {
    testCaseFinished: {
      testCaseStartedId: '888658c4-2935-40bb-b0ca-aacea86c84fd',
      timestamp: {
        seconds: 1783361612,
        nanos: 198000000,
      },
      willBeRetried: false,
    },
  },
  {
    testCaseStarted: {
      attempt: 0,
      testCaseId: '4e56d0d2-d181-4718-b9e8-9cc5e3a27f82',
      id: '976fa6e2-fa77-41b5-a9c0-b95e1cbccb2e',
      timestamp: {
        seconds: 1783361612,
        nanos: 199000000,
      },
      workerId: '0',
    },
  },
  {
    testStepStarted: {
      testCaseStartedId: '976fa6e2-fa77-41b5-a9c0-b95e1cbccb2e',
      testStepId: '95829b85-5c28-4191-b951-abe86c0f3c2e',
      timestamp: {
        seconds: 1783361612,
        nanos: 199000000,
      },
    },
  },
  {
    testStepFinished: {
      testCaseStartedId: '976fa6e2-fa77-41b5-a9c0-b95e1cbccb2e',
      testStepId: '95829b85-5c28-4191-b951-abe86c0f3c2e',
      testStepResult: {
        duration: {
          seconds: 0,
          nanos: 516362,
        },
        status: 'PENDING',
      },
      timestamp: {
        seconds: 1783361612,
        nanos: 199000000,
      },
    },
  },
  {
    testCaseFinished: {
      testCaseStartedId: '976fa6e2-fa77-41b5-a9c0-b95e1cbccb2e',
      timestamp: {
        seconds: 1783361612,
        nanos: 200000000,
      },
      willBeRetried: false,
    },
  },
  {
    testCaseStarted: {
      attempt: 0,
      testCaseId: '0ca779f9-70e7-4280-b138-d12962b6c4a7',
      id: 'abe21b6b-5f73-4ed6-b165-22a0d8696e87',
      timestamp: {
        seconds: 1783361612,
        nanos: 200000000,
      },
      workerId: '0',
    },
  },
  {
    testStepStarted: {
      testCaseStartedId: 'abe21b6b-5f73-4ed6-b165-22a0d8696e87',
      testStepId: '01b03519-ec11-4ce1-a1ed-42ac8d27e6b1',
      timestamp: {
        seconds: 1783361612,
        nanos: 200000000,
      },
    },
  },
  {
    testStepFinished: {
      testCaseStartedId: 'abe21b6b-5f73-4ed6-b165-22a0d8696e87',
      testStepId: '01b03519-ec11-4ce1-a1ed-42ac8d27e6b1',
      testStepResult: {
        duration: {
          seconds: 0,
          nanos: 98952,
        },
        status: 'PASSED',
      },
      timestamp: {
        seconds: 1783361612,
        nanos: 200000000,
      },
    },
  },
  {
    testStepStarted: {
      testCaseStartedId: 'abe21b6b-5f73-4ed6-b165-22a0d8696e87',
      testStepId: 'b3216379-bb91-4bfd-9cae-6dd43d2df1b8',
      timestamp: {
        seconds: 1783361612,
        nanos: 200000000,
      },
    },
  },
  {
    testStepFinished: {
      testCaseStartedId: 'abe21b6b-5f73-4ed6-b165-22a0d8696e87',
      testStepId: 'b3216379-bb91-4bfd-9cae-6dd43d2df1b8',
      testStepResult: {
        duration: {
          seconds: 0,
          nanos: 138586375,
        },
        status: 'PASSED',
      },
      timestamp: {
        seconds: 1783361612,
        nanos: 339000000,
      },
    },
  },
  {
    testStepStarted: {
      testCaseStartedId: 'abe21b6b-5f73-4ed6-b165-22a0d8696e87',
      testStepId: '7207fb52-ef0d-4aba-8635-278c5c597657',
      timestamp: {
        seconds: 1783361612,
        nanos: 339000000,
      },
    },
  },
  {
    testStepFinished: {
      testCaseStartedId: 'abe21b6b-5f73-4ed6-b165-22a0d8696e87',
      testStepId: '7207fb52-ef0d-4aba-8635-278c5c597657',
      testStepResult: {
        duration: {
          seconds: 0,
          nanos: 98567,
        },
        status: 'PASSED',
      },
      timestamp: {
        seconds: 1783361612,
        nanos: 339000000,
      },
    },
  },
  {
    testCaseFinished: {
      testCaseStartedId: 'abe21b6b-5f73-4ed6-b165-22a0d8696e87',
      timestamp: {
        seconds: 1783361612,
        nanos: 339000000,
      },
      willBeRetried: false,
    },
  },
  {
    testCaseStarted: {
      attempt: 0,
      testCaseId: '13ee0fb0-9f60-4e76-97e2-4e450ef3c825',
      id: '4c26b0ae-3b1b-43dd-a949-fc89da334ad6',
      timestamp: {
        seconds: 1783361612,
        nanos: 340000000,
      },
      workerId: '0',
    },
  },
  {
    testStepStarted: {
      testCaseStartedId: '4c26b0ae-3b1b-43dd-a949-fc89da334ad6',
      testStepId: '0ba81835-6500-4832-8044-c609e74d99f9',
      timestamp: {
        seconds: 1783361612,
        nanos: 340000000,
      },
    },
  },
  {
    testStepFinished: {
      testCaseStartedId: '4c26b0ae-3b1b-43dd-a949-fc89da334ad6',
      testStepId: '0ba81835-6500-4832-8044-c609e74d99f9',
      testStepResult: {
        duration: {
          seconds: 0,
          nanos: 82328,
        },
        status: 'PASSED',
      },
      timestamp: {
        seconds: 1783361612,
        nanos: 340000000,
      },
    },
  },
  {
    testStepStarted: {
      testCaseStartedId: '4c26b0ae-3b1b-43dd-a949-fc89da334ad6',
      testStepId: '80d444c1-c59a-49d6-a6d4-826397079a7c',
      timestamp: {
        seconds: 1783361612,
        nanos: 340000000,
      },
    },
  },
  {
    suggestion: {
      id: 'f049750f-4e76-4e5c-b299-72fef2c372df',
      pickleStepId: '2a57b067-73b9-400a-8e96-a447289f116b',
      snippets: [
        {
          code: "When('something undefined happens quickly', function () {\n  // Write code here that turns the phrase above into concrete actions\n  return 'pending';\n});",
          language: 'javascript',
        },
      ],
    },
  },
  {
    testStepFinished: {
      testCaseStartedId: '4c26b0ae-3b1b-43dd-a949-fc89da334ad6',
      testStepId: '80d444c1-c59a-49d6-a6d4-826397079a7c',
      testStepResult: {
        status: 'UNDEFINED',
        duration: {
          seconds: 0,
          nanos: 0,
        },
      },
      timestamp: {
        seconds: 1783361612,
        nanos: 342000000,
      },
    },
  },
  {
    testStepStarted: {
      testCaseStartedId: '4c26b0ae-3b1b-43dd-a949-fc89da334ad6',
      testStepId: '4cb73b40-c005-46f5-8f57-33738d123619',
      timestamp: {
        seconds: 1783361612,
        nanos: 342000000,
      },
    },
  },
  {
    testStepFinished: {
      testCaseStartedId: '4c26b0ae-3b1b-43dd-a949-fc89da334ad6',
      testStepId: '4cb73b40-c005-46f5-8f57-33738d123619',
      testStepResult: {
        status: 'SKIPPED',
        duration: {
          seconds: 0,
          nanos: 0,
        },
      },
      timestamp: {
        seconds: 1783361612,
        nanos: 342000000,
      },
    },
  },
  {
    testCaseFinished: {
      testCaseStartedId: '4c26b0ae-3b1b-43dd-a949-fc89da334ad6',
      timestamp: {
        seconds: 1783361612,
        nanos: 342000000,
      },
      willBeRetried: false,
    },
  },
  {
    testStepFinished: {
      testCaseStartedId: 'a62eb05b-2582-4ea4-9b82-334cffb27087',
      testStepId: 'e5d9da74-769d-47f4-beff-5e2f7a76e034',
      testStepResult: {
        duration: {
          seconds: 0,
          nanos: 649285122,
        },
        status: 'PASSED',
      },
      timestamp: {
        seconds: 1783361612,
        nanos: 545000000,
      },
    },
  },
  {
    testStepStarted: {
      testCaseStartedId: 'a62eb05b-2582-4ea4-9b82-334cffb27087',
      testStepId: '086db806-de45-4fca-86b8-72cd981e9217',
      timestamp: {
        seconds: 1783361612,
        nanos: 545000000,
      },
    },
  },
  {
    testStepFinished: {
      testCaseStartedId: 'a62eb05b-2582-4ea4-9b82-334cffb27087',
      testStepId: '086db806-de45-4fca-86b8-72cd981e9217',
      testStepResult: {
        duration: {
          seconds: 0,
          nanos: 315751,
        },
        status: 'PASSED',
      },
      timestamp: {
        seconds: 1783361612,
        nanos: 546000000,
      },
    },
  },
  {
    testCaseFinished: {
      testCaseStartedId: 'a62eb05b-2582-4ea4-9b82-334cffb27087',
      timestamp: {
        seconds: 1783361612,
        nanos: 546000000,
      },
      willBeRetried: false,
    },
  },
  {
    testRunFinished: {
      testRunStartedId: '4a5220c9-a353-4dd4-8b90-b9782be3c501',
      timestamp: {
        seconds: 1783361612,
        nanos: 561000000,
      },
      success: false,
    },
  },
] as ReadonlyArray<Envelope>
