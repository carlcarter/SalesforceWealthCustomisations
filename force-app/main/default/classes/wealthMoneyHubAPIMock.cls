public with sharing class wealthMoneyHubAPIMock {
    
    @AuraEnabled(cacheable=true)
    public static String getMockAccountsResponse() {
        // Define your mock JSON response
        String jsonResponse = '[{"id":"344f69f8-0172-4d68-ac38-ea11be1f7373","dateAdded":"2020-07-27T14:33:44+00:00","dateModified":"2020-07-27T14:33:44+00:00","accountName":"Starling Current Account","accountReference":"7729","type":"cash:current","providerName":"Starling","providerId":"DEMO","providerReference":"demo","accountHolderName":"Julie Morris","connectionId":"DEMO:999","balance":{"date":"2020-07-12","amount":{"value":124885,"currency":"GBP"}},"currency":"GBP","details":{"AER":0,"overdraftLimit":0,"sortCodeAccountNumber":"56002926207729","iban":"GB2960161331926819"},"transactionData":{"count":108,"earliestDate":"2019-07-28","lastDate":"2020-07-12"}},{"id":"123f69f8-0172-4d68-ac38-ea11be1f1234","dateAdded":"2020-08-20T10:12:30+00:00","dateModified":"2020-08-20T10:12:30+00:00","accountName":"Monzo Current Account","accountReference":"9834","type":"cash:current","providerName":"Monzo","providerId":"DEMO","providerReference":"demo","accountHolderName":"Julie Morris","connectionId":"DEMO:998","balance":{"date":"2020-08-10","amount":{"value":87890,"currency":"GBP"}},"currency":"GBP","details":{"AER":0,"overdraftLimit":0,"sortCodeAccountNumber":"55002913207729","iban":"GB2960161331926820"},"transactionData":{"count":67,"earliestDate":"2019-08-12","lastDate":"2020-08-10"}},{"id":"789f69f8-0172-4d68-ac38-ea11be1f7890","dateAdded":"2020-09-15T08:20:15+00:00","dateModified":"2020-09-15T08:20:15+00:00","accountName":"Revolut Current Account","accountReference":"5621","type":"cash:current","providerName":"Revolut","providerId":"DEMO","providerReference":"demo","accountHolderName":"Julie Morris","connectionId":"DEMO:997","balance":{"date":"2020-09-10","amount":{"value":45900,"currency":"GBP"}},"currency":"GBP","details":{"AER":0,"overdraftLimit":0,"sortCodeAccountNumber":"57002956207729","iban":"GB2960161331926821"},"transactionData":{"count":45,"earliestDate":"2019-09-20","lastDate":"2020-09-10"}}]';

        // Return the mock JSON response
        return jsonResponse;
    }

    @AuraEnabled(cacheable=true)
    public static String getMockPensionAndInvestmentsResponse() {
        // Define your mock JSON response
        String jsonResponse = '[{"id": "54841fea-7eb6-4523-9a20-2722d19d7766", "dateAdded": "2020-07-27T14:33:44+00:00", "dateModified": "2020-07-27T14:33:44+00:00", "accountName": "HL Sipp", "type": "pension", "providerName": "Hargreaves Lansdown", "balance": {"amount": {"value": 3525134, "currency": "GBP"}, "date": "2020-07-01"}, "currency": "GBP", "details": {}, "performanceScore": {"totals": {"openingBalance": {"amount": {"value": 3325134, "currency": "GBP"}, "date": "2019-08-01"}, "currentBalance": {"amount": {"value": 3525134, "currency": "GBP"}, "date": "2020-07-01"}, "contributions": 0, "withdrawals": 0, "nonContributionGrowth": 200000, "growthRate": 6.01, "annualisedGrowthRate": 6.57}}}, {"id": "fa447159-13d2-4089-bbbc-28be41d5febd", "dateAdded": "2020-07-27T14:33:44+00:00", "dateModified": "2020-07-27T14:33:44+00:00", "accountName": "Wealthify ISA", "type": "investment", "providerName": "Wealthify", "balance": {"amount": {"value": 253214, "currency": "GBP"}, "date": "2020-07-16"}, "currency": "GBP", "details": {}, "performanceScore": {"totals": {"openingBalance": {"amount": {"value": 200000, "currency": "GBP"}, "date": "2020-01-16"}, "currentBalance": {"amount": {"value": 253214, "currency": "GBP"}, "date": "2020-07-16"}, "contributions": 0, "withdrawals": 0, "nonContributionGrowth": 53214, "growthRate": 26.61, "annualisedGrowthRate": 60.5}}}]';

        // Return the mock JSON response
        return jsonResponse;
    }

    @AuraEnabled(cacheable=true)
    public static String getMockAssetsResponse() {
        // Define your mock JSON response
        String jsonResponse = '[{"id":"2e30e166-70f8-4b46-b0e3-8afe4acda964","dateAdded":"2020-07-27T14:33:44+00:00","dateModified":"2020-07-27T14:33:44+00:00","accountName":"15 Hardys Rd","type":"properties:residential","balance":{"amount":{"value":27600000,"currency":"GBP"},"date":"2016-01-01"},"currency":"GBP","details":{}}]';

        // Return the mock JSON response
        return jsonResponse;
    }

}
