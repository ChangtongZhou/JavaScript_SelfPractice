# CSS Sepcifity \(Priority\)

## order \(high -&gt; low\): 

1. inline style \(1000 points\)
2. id \(101 points\)
3. class
4. .class.class &gt; .class
5. same level, whose position is lower who has higher priority
6. tag name \(1 point\)

> Note: Mostly we use class more often instead of id, because id has a really high priority, it is hard to override and debug, but class has lower priority, which makes things easier.

Inline style in JSX: `style={{color: "red"}}`

