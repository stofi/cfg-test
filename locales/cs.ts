import type { Locale } from './en'

const cs: Locale = {
  app: {
    title: 'Investiční platforma',
  },
  common: {
    next: 'Další',
    back: 'Zpět',
    submit: 'Odeslat',
    cancel: 'Zrušit',
    confirm: 'Potvrdit',
    continuePrevious: 'Chcete pokračovat s předchozím záznamem?',
    error: 'Došlo k chybě. Zkuste to prosím znovu.',
  },
  pages: {
    index: {
      title: 'Úvodní stránka',
      description: 'Investujte chytře.',
    },
    investment: {
      title: 'Investice',
      description: 'Investujte do své budoucnosti s naší platformou.',
      form: {
        title: 'Formulář investice',
        description: 'Vyplňte níže uvedený formulář pro zahájení investování.',
      },
    },
  },
  modals: {
    continuePrevious: {
      title: 'Pokračovat v záznamu',
      body: 'Zdá se, že máte nedokončený záznam. Chcete pokračovat tam, kde jste skončili?',
      confirm: 'Ano, pokračovat',
      cancel: 'Ne, začít znovu',
    },
  },
  forms: {
    steps: {
      address: {
        title: 'Adresa',
        description: 'Zadejte svou adresu.',
      },
      contact: {
        title: 'Kontaktní informace',
        description: 'Zadejte své kontaktní informace.',
      },
      details: {
        title: 'Detaily investice',
        description: 'Zadejte detaily své investice.',
      },
      personal: {
        title: 'Osobní informace',
        description: 'Zadejte své osobní informace.',
      },
    },
    fields: {
      amount: {
        label: 'Pravidelná výše investice (Kč)',
      },
      fullName: {
        label: 'Jméno a příjmení',
      },
      phoneNumber: {
        label: 'Telefonní číslo',
      },
      email: {
        label: 'Emailová adresa',
      },
      birthId: {
        label: 'Rodné číslo',
      },
      citizenId: {
        label: 'Číslo občanského průkazu',
      },
      city: {
        label: 'Město',
      },
      street: {
        label: 'Ulice',
      },
      zipCode: {
        label: 'PSČ',
      },
    },
    validations: {
      amount: {
        number: `Zadejte číslo.`,
        min: `Zadejte částku vyšší než {min}.`,
        max: `Zadejte částku nižší než {max}.`,
      },
      fullName: {
        required: 'Zadejte své jméno a příjmení.',
      },
      phoneNumber: {
        length: 'Zadejte platné telefonní číslo.',
      },
      email: {
        valid: 'Zadejte platnou emailovou adresu.',
      },
      birthId: {
        valid: 'Zadejte platné rodné číslo ve formátu 123456/7890.',
      },
      citizenId: {
        valid: 'Zadejte platné číslo občanského průkazu.',
      },
      city: {
        required: 'Zadejte své město.',
      },
      street: {
        required: 'Zadejte svou ulici.',
      },
      zipCode: {
        length: 'Zadejte platné PSČ.',
      },
    },
  },
}

export default cs