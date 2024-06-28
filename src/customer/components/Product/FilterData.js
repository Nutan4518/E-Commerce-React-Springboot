export const color=[
    "white",
    "black",
    "red",
    "maroon",
    "beige",
    "pink",
    "green",
    "yellow"
];

export const filters=[
    {
        id: 'color',
        name: 'Color',
        options: [
          { value: 'white', label: 'White', checked: false },
          { value: 'beige', label: 'Beige', checked: false },
          { value: 'blue', label: 'Blue', checked: false },
          { value: 'brown', label: 'Brown', checked: false },
          { value: 'green', label: 'Green', checked: false },
          { value: 'purple', label: 'Purple', checked: false },
        ],
      },
      {
        id: 'size',
        name: 'Size',
        options: [
          { value: 's', label: 's', checked: false },
          { value: 'm', label: 'm', checked: false },
          { value: 'l', label: 'l', checked: false },
          { value: 'xL', label: 'xL', checked: false },
          { value: 'xxL', label: 'xxL', checked: false },
        ],
      },
    
]

export const singleFilter=[
    {
        id:"price",
        name:"Price",
        options:[
            { value:"159-399", label:"₹159 to ₹399"},
            { value:"399-999", label:"₹399 to ₹999"},
            { value:"999-1999", label:"₹999 to ₹1999"},
            { value:"1999-2999", label:"₹1999 to ₹2999"},
            { value:"2999-Above", label:"₹2999 and Above"},

        ]
    },

    {
        id: 'discount',
        name: 'Discount Range',
        options: [
          { value: '20', label: '20% and Above' },
          { value: '30', label: '30% and Above' },
          { value: '40', label: '40% and Above' },
          { value: '50', label: '50% and Above' },
          { value: '60', label: '60% and Above' },
          { value: '70', label: '70% and Above' },
          { value: '80', label: '80% and Above' },
        ],
      },
    {
        id:"stock",
        name:"Availability",
        options:[
            {value:"in_stock", label:"In stock"},
            {value:"out_of_stock", label:"Out of stock"},

        ]
    }
]