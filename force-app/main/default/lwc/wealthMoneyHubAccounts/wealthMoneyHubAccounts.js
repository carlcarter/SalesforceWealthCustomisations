import { LightningElement, wire, api, track } from 'lwc';
import getMockAccountsResponse from '@salesforce/apex/wealthMoneyHubAPIMock.getMockAccountsResponse';
import getMockPensionAndInvestmentsResponse from '@salesforce/apex/wealthMoneyHubAPIMock.getMockPensionAndInvestmentsResponse';
import getMockAssetsResponse from '@salesforce/apex/wealthMoneyHubAPIMock.getMockAssetsResponse';

export default class WealthMoneyHubAccounts extends LightningElement {
    
    @api customerName = 'Julie Morris';
    @api flowApiName;
    @track isSmallScreen;
    @track isMediumScreen;
    @track selectedCards = [];

    mockAccountResponse;
    mockPensionAndInvestmentsResponse;
    mockAssetsResponse;
    error;

    totalCashBalance = 0;
    numberOfCashAccounts = 0;
    totalPensionAndInvestmentsBalance = 0;
    numberOfPensionAndInvestmentsAccounts = 0;
    totalAssetsBalance = 0;
    numberOfAssetsAccounts = 0;

    // Get the combined total balance
    get combinedTotalBalance() {
        return this.totalCashBalance + this.totalPensionAndInvestmentsBalance + this.totalAssetsBalance;
    }

    // Get the combined number of accounts
    get combinedNumberOfAccounts() {
        return this.numberOfCashAccounts + this.numberOfPensionAndInvestmentsAccounts + this.numberOfAssetsAccounts;
    }

    //CASH
    @wire(getMockAccountsResponse)
    wiredMockAccountsResponse({ error, data }) {
        if (data) {
            this.mockAccountResponse = JSON.parse(data);
            this.numberOfCashAccounts = this.mockAccountResponse.length;
            this.totalCashBalance = this.mockAccountResponse.reduce((total, account) => {
                return total + account.balance.amount.value;
            }, 0);
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.mockAccountResponse = undefined;
        }
    }

    //PENSIONS AND INVESTMENTS
    @wire(getMockPensionAndInvestmentsResponse)
    wiredMockPensionAndInvestmentsResponse({ error, data }) {
        if (data) {
            this.mockPensionAndInvestmentsResponse = JSON.parse(data);
            this.numberOfPensionAndInvestmentsAccounts = this.mockPensionAndInvestmentsResponse.length;
            this.totalPensionAndInvestmentsBalance = this.mockPensionAndInvestmentsResponse.reduce((total, account) => {
                return total + account.balance.amount.value;
            }, 0);
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.mockPensionAndInvestmentsResponse = undefined;
        }
    }

    //PENSIONS AND INVESTMENTS
    @wire(getMockAssetsResponse)
    wiredMockAssetsResponse({ error, data }) {
        if (data) {
            this.mockAssetsResponse = JSON.parse(data);
            this.numberOfAssetsAccounts = this.mockAssetsResponse.length;
            this.totalAssetsBalance = this.mockAssetsResponse.reduce((total, account) => {
                return total + account.balance.amount.value;
            }, 0);
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.mockAssetsResponse = undefined;
        }
    }

    get accountColumnSize() {
        if (this.isSmallScreen) {
            return '12'; 
        }
        else if (this.isMediumScreen) {
            return '6';
        } else {
            return '4';
        }
    }

    updateIsSmallScreen() {
        this.isSmallScreen = window.innerWidth <= 768; // Adjust the value as needed for small screen size
    }

    updateIsMediumScreen() {
        this.isMediumScreen = window.innerWidth > 768 && window.innerWidth <= 1080; // Adjust the value as needed for small screen size
    }
    
    connectedCallback() {
        this.updateIsSmallScreen();
        this.updateIsMediumScreen();
        window.addEventListener('resize', () => {
            this.updateIsSmallScreen();
            this.updateIsMediumScreen();
        });
    }

    handleCheckboxChange(event) {
        const accountId = event.target.dataset.id;
        const isChecked = event.target.checked;

        if (isChecked) {
            this.selectedCards.push(accountId);
        } else {
            this.selectedCards = this.selectedCards.filter(id => id !== accountId);
        }

        // Use the selectedCards array as needed, for example, pass it to a Salesforce Flow
        // Create a custom event to pass the selectedCards data to the Flow
        const selectedCardsEvent = new CustomEvent('selectedcardschange', {
            detail: { selectedCards: this.selectedCards }
        });

        // Dispatch the custom event
        this.dispatchEvent(selectedCardsEvent);
    }


}
