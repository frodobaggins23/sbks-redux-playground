import React, { useState } from 'react'
import store from '../redux/store'

const demo = () => {
	const [state, setState] = useState(store.getState())
	store.subscribe(() => setState(store.getState()))
	return (
		<div style={{ maxWidth: '1120px', margin: '0 auto' }}>
			<h1>This is Redux demo</h1>
			<h4>Counter</h4>
			<p>
				<span>{state.counterReducer.value}</span>
			</p>
			<button onClick={() => store.dispatch({ type: 'COUNTER/ADD' })}>Add</button>
			<button onClick={() => store.dispatch({ type: 'COUNTER/REMOVE' })}>Remove</button>
			<h4>Population</h4>
			<p>
				<span>{state.populationReducer.value}</span>
			</p>
			<button onClick={() => store.dispatch({ type: 'POPULATION/GROW' })}>Grow</button>
			<button onClick={() => store.dispatch({ type: 'POPULATION/SHRINK' })}>Shrink</button>
			<h4>Sagas</h4>
			<button>Fetch doggy</button>
		</div>
	)
}

export default demo
