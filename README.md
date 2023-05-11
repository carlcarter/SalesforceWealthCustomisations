Disclaimer: These are demo components that have been built to showcase examples specifically for Wealth.

# Custom Components

## WealthAdvisorsGrid

![Alt text](./images/wealthAdvisorsGrid.png?raw=true "Title")

### Component Parts:

```
./objects/Wealth_Advisor__c
./classes/WealthAdvisorsController.cls
./lwc/wealthAdvisorsGrid
./permissionsets/WealthAdvisorsGrid
```

1. Deploy the Object, Class and LWC to your org. 

```
sfdx project deploy start -o <targetorg>
```

2. Grant permissions

Apply the WealthAdvisorsGrid permission set to the appropriate users

3. Update Org Wide sharing for external users to the Wealth Advisors object - this is likely to be set to private, ideally needs to be Public Read Only.

4. Import the sample data set if needed as below

To import the data into your org:
```
sfdx data import tree -u <org-needs-data> \ --plan ./data/Wealth_Advisor__c-plan.json
```

To extract data from an object:
```
sfdx data export tree -q "SELECT Id, Name, Years_of_Experience__c, Community_Involvement__c, Awards_and_Recognitions__c, Customised_Approach__c, Investment_Philosophy__c, Personal_Interests__c, Professional_Designations__c, Specialisations__c, Photo_URL__c FROM Wealth_Advisor__c" -p
```

```
sfdx project retrieve start -m PermissionSet:WealthAdvisorsGrid -o 2206wealth
CustomObject
ApexClass
```

# Salesforce DX Project: Next Steps

Now that you’ve created a Salesforce DX project, what’s next? Here are some documentation resources to get you started.

## How Do You Plan to Deploy Your Changes?

Do you want to deploy a set of changes, or create a self-contained application? Choose a [development model](https://developer.salesforce.com/tools/vscode/en/user-guide/development-models).

## Configure Your Salesforce DX Project

The `sfdx-project.json` file contains useful configuration information for your project. See [Salesforce DX Project Configuration](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_config.htm) in the _Salesforce DX Developer Guide_ for details about this file.

## Read All About It

- [Salesforce Extensions Documentation](https://developer.salesforce.com/tools/vscode/)
- [Salesforce CLI Setup Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_intro.htm)
- [Salesforce DX Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro.htm)
- [Salesforce CLI Command Reference](https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference.htm)
