const en = {
  app: {
    title: 'Investment Platform',
  },
  common: {
    next: 'Next',
    back: 'Back',
    submit: 'Submit',
    cancel: 'Cancel',
    confirm: 'Confirm',
    continuePrevious: 'Do you want to continue with your previous entry?',
    error: 'An error occurred. Please try again.',
  },
  pages: {
    index: {
      title: 'Home Page',
      description: 'Invest smarter.',
    },
    investment: {
      title: 'Investment',
      description: 'Invest in your future with our platform.',
      form: {
        title: 'Investment Form',
        description: 'Please fill out the form below to start investing.',
      },
    },
  },
  modals: {
    continuePrevious: {
      title: 'Resume Your Entry',
      body: 'It seems you have an unfinished entry. Would you like to continue from where you left off?',
      confirm: 'Yes, continue',
      cancel: 'No, start over',
    },
  },
  forms: {
    steps: {
      details: {
        title: 'Investment Details',
        description: 'Enter the details of your investment.',
      },
      personal: {
        title: 'Personal Information',
        description: 'Enter your personal information.',
      },
      address: {
        title: 'Address',
        description: 'Enter your address.',
      },
      contact: {
        title: 'Contact Information',
        description: 'Enter your contact information.',
      },
    },
    fields: {
      amount: {
        label: 'Regular Investment Amount (Kč)',
      },
      fullName: {
        label: 'Full Name',
      },
      phoneNumber: {
        label: 'Phone Number',
      },
      email: {
        label: 'Email Address',
      },
      birthId: {
        label: 'Birth ID',
      },
      citizenId: {
        label: 'Citizen ID',
      },
      city: {
        label: 'City',
      },
      street: {
        label: 'Street',
      },
      zipCode: {
        label: 'ZIP Code',
      },
    },
    validations: {
      amount: {
        number: `Please enter a positive number.`,
        min: `Please enter an amount greater than {min}.`,
        max: `Please enter an amount less than {max}.`,
      },
      fullName: {
        required: 'Please enter your full name.',
      },
      phoneNumber: {
        length: 'Please enter a valid 9-digit phone number.',
      },
      email: {
        valid: 'Please enter a valid email address.',
      },
      birthId: {
        valid: 'Please enter a valid birth ID in the format 123456/7890.',
      },
      citizenId: {
        valid: 'Please enter a valid 10-digit citizen ID.',
      },
      city: {
        required: 'Please enter your city.',
      },
      street: {
        required: 'Please enter your street.',
      },
      zipCode: {
        length: 'Please enter a valid 5-digit ZIP code.',
      },
    },
  },
}

export type Locale = typeof en
export default en