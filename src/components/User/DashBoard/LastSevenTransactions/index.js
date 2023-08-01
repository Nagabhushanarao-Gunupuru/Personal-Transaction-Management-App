import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Legend,
    ResponsiveContainer,
  } from "recharts"

const LastSevenTransactions = (props) => {
    const {LastSevenTransactions} = props
    
    

    const DataFormatter = (number) => {
      if (number > 1000) {
        return `${(number / 1000).toString()}k`
      }
      return number.toString()
    }
  
    return (
      <ResponsiveContainer width="100%" height={500}>
        <BarChart
          data={LastSevenTransactions}
          margin={{
            top: 5,
          }}
        >
          <XAxis
            dataKey="newDate"
            tick={{
              stroke: "gray",
              strokeWidth: 1,
            }}
          />
          <YAxis
            tickFormatter={DataFormatter}
            tick={{
              stroke: "gray",
              strokeWidth: 0,
            }}
          />
          <Legend
            wrapperStyle={{
              padding: 30,
            }}
          />
          <Bar dataKey="debit" name="debit" fill="#1f77b4" barSize="20%" />
          <Bar dataKey="credit" name="credit" fill="#fd7f0e" barSize="20%" />
        </BarChart>
      </ResponsiveContainer>
    )
  }
  
  export default LastSevenTransactions