import { h, Component, createRef, Fragment } from 'preact'
import { Reader } from './reader'
import styles from './readers.css'

/*
 *	Contains many <Reader>s and handles resizing them
*/
export class Readers extends Component {
	state = {
		readers: [
			{ book: 'GEN', chapter: 4, width: 0, readerRef: createRef() },
			{ book: 'LUK', chapter: 3, width: 0, readerRef: createRef() },
		]
	}
	preMoveMouseWidths
	initialPageX = 0

	componentDidMount() {
		this.state.readers.forEach(reader => {
			reader.width = reader.readerRef.current.base.offsetWidth
		})
		this.setState({ readers: this.state.readers })
	}

	onMouseMove = (e, index) => {
		e.preventDefault()
		const offsetX = e.pageX - this.initialPageX
		this.state.readers.forEach((reader, i) => {
			if (i === index)
				reader.width = this.preMoveMouseWidths[i] + offsetX
			else if (i === index + 1)
				reader.width = this.preMoveMouseWidths[i] - offsetX
		})
		this.setState({ readers: this.state.readers })
	}

	mouseMoveHandler(e, index) {
		e.preventDefault()
		this.initialPageX = e.pageX
		this.preMoveMouseWidths = this.state.readers.map(r => r.width)
		
		const handler = e => this.onMouseMove(e, index)
		document.addEventListener('mousemove', handler)
		document.addEventListener('mouseup', _e =>
			document.removeEventListener('mousemove', handler))
	}

	render() {
		return (
			<Fragment>
				{this.state.readers.map((reader, index) => (
					<Fragment>
						<Reader
							book={reader.book}
							chapter={reader.chapter}
							width={reader.width}
							ref={reader.readerRef}
						/>
						{index !== this.state.readers.length - 1 &&
							<div class={styles.dragbar} onMouseDown={e => this.mouseMoveHandler(e, index)} />}
					</Fragment>
				))}
			</Fragment>
		)
	}
}