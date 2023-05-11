public with sharing class WealthAdvisorsController {
    @AuraEnabled(cacheable=true)
    public static List<Wealth_Advisor__c> getWealthAdvisors() {
        if (!Schema.sObjectType.Wealth_Advisor__c.isAccessible()) {
            throw new SecurityException('You do not have access to the Wealth_Advisor__c object.');
        }

        return [SELECT Id, Name, Years_of_Experience__c, Community_Involvement__c, Awards_and_Recognitions__c, Customised_Approach__c, Investment_Philosophy__c, Personal_Interests__c, Professional_Designations__c, Specialisations__c, Photo_URL__c
                FROM Wealth_Advisor__c
                ORDER BY Name ASC];
    }
}