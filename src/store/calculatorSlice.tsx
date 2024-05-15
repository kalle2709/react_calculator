import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CalculatorState {
  value: string;
  oldValue: string;
  resetlabel: string;
  sign: string;
  operation: string;
  operationSelected: boolean;
  countDig: number;
}

const initialState: CalculatorState = {
  value: '0',
  oldValue: '0',
  resetlabel: 'AC',
  sign: '',
  operation: '',
  operationSelected: false,
  countDig: 0,
};

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
      reset: (state) => 
        {
          Object.assign(state, initialState);
        },

        signSymbol: (state) =>
        {
          state.sign = state.sign === '-' ? '' : '-';
        },

        percentage: (state) => 
        {
          
          let val = +state.value; // to convert string into number
          let res:string = `${val/100}`; // to convert number into string
          state.value = state.sign+res; /// to preserve the sign
        },

        add: (state,action:PayloadAction<string>) =>
          {
                 
                  state.operationSelected=true;
                  state.operation="+";
                  state.oldValue=state.sign+action.payload;
                  state.countDig=0;
                  state.sign="";
                  state.value = "";
      
          },

        sub: (state,action:PayloadAction<string>) =>
          {
                 
                  state.operationSelected=true;
                  state.operation="-";
                  state.oldValue=state.sign+action.payload;
                  state.countDig=0;
                  state.value = "";
                  state.sign="";
                  state.value = "";
      
          },

        mul: (state,action:PayloadAction<string>) =>
          {
                 
                  state.operationSelected=true;
                  state.operation="*";
                  state.oldValue=state.sign+action.payload;
                  state.countDig=0;
                  state.sign="";
                  state.value = "";
      
          },
        div: (state,action:PayloadAction<string>) =>
          {
                 
                  state.operationSelected=true;
                  state.operation="%";
                  state.oldValue=state.sign+action.payload;
                  state.countDig=0;
                  state.sign="";
                  state.value = "";
      
          },

     valueChange: (state,action: PayloadAction<string>) =>
        {
            state.countDig = state.countDig + 1;
   
            if(state.countDig > 0)
                {
                    state.value = state.value === "0" ? state.sign+action.payload : state.sign+state.value + action.payload;
                    
                }
            else 
            state.value = state.sign + action.payload;
                
            state.sign = "";
            state.resetlabel="C";

        }, 
    
   result: (state,action:PayloadAction<string>) =>
    {
        let a = +state.oldValue;
        let b = +action.payload;

            if(state.operation === "+" && state.operationSelected)
                {
                    let res:string = `${a + b}`;
                    state.value = state.sign+res;
                }
            if(state.operation === "-" && state.operationSelected)
                {
                    let res:string = `${a - b}`;
                    state.value = state.sign+res;
                }
            if(state.operation === "*" && state.operationSelected)
                {
                    let res:string = `${a * b}`;
                    state.value = state.sign+res;
                }
            if(state.operation === "%" && state.operationSelected)
                {
                    let res:string = `${a/b}`;
                    state.value = state.sign+res;
                }
                
    },
  },
});

export const {
  reset,
  signSymbol,
  percentage,
  add,
  sub,
  mul,
  div,
  valueChange,
  result
  
} = calculatorSlice.actions;

export default calculatorSlice.reducer;
