import { LightningElement, wire, track } from 'lwc';
import getWealthAdvisors from '@salesforce/apex/WealthAdvisorsController.getWealthAdvisors';

export default class WealthAdvisorsGrid extends LightningElement {
    @track wealthAdvisors;
    @track selectedAdvisor;
    @track isSmallScreen;
    @track isMediumScreen;

    @wire(getWealthAdvisors)
    wiredWealthAdvisors({ error, data }) {
        if (data) {
            this.wealthAdvisors = data.map(advisor => {
                return { 
                    ...advisor,
                    specialisationsArray: advisor.Specialisations__c.split(';'),
                    designationsArray: advisor.Professional_Designations__c.split(';')
                };
            });
        } else if (error) {
            console.error('Error retrieving wealth advisors:', error);
        }
    }

    handleSeeMore(event) {
        this.selectedAdvisor = this.wealthAdvisors.find(advisor => advisor.Id === event.target.dataset.id);
    }

    handleCloseModal() {
        this.selectedAdvisor = null;
    }

    get advisorColumnSize() {
        if (this.isSmallScreen) {
            return '12'; 
        }
        else if (this.isMediumScreen) {
            return '6';
        } else {
            const numAdvisors = this.wealthAdvisors.length;
            if (numAdvisors === 1) {
                return '12';
            } else if (numAdvisors === 2) {
                return '6';
            } else {
                return '4';
            }
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
    
}