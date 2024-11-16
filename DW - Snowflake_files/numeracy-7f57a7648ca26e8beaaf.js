    query GetExtendedProjectsList($offset: Int!, $limit: Int!, $database: String, $schema: String) {
      projects(limit: $limit, offset: $offset, database: $database, schema: $schema) {
        id
        database
        schema
        name: bundleInstanceName
        version {
          predefined {
            session {
              trainings {
                model {
                  modelId
                }
              }
            }
          }
          prod {
            session {
              trainings {
                model {
                  modelId
                }
              }
            }
          }
        }
      }
    }
  `,variables:{offset:e,limit:t,database:r,schema:s}}))(e)),{additionalOptions:this.buildDocumentAiRequestOptions(e.currentWarehouse)}))}getPredefinedModelsList(e){return this.graphqlQuery(Object.assign(Object.assign({},{name:"GetPredefinedModels",query:rE`
    query Models($predefined: Boolean) {
      models(predefined: $predefined) {
        id
        modelId
        name
        version
        description
        isDefault
        type
      }
    }
//# sourceMappingURL=numeracy-7f57a7648ca26e8beaaf.js.map