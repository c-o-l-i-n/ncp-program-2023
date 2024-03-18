import Home from '@/components/Home'
import { useRouter } from 'next/router'
import { ReactElement } from 'react'
import seedrandom from 'seedrandom'

const ids = ['Nz2e', 'Kj1A', 'KCmp', 'TnN3', 'N66o', 'T3aD', '2gjM', 'soVT']

// get current date in YYYY-MM-DD format
const date = new Date().toLocaleDateString('fr-CA', {
	year: 'numeric',
	month: '2-digit',
	day: '2-digit',
})

// initialize random number generator with date as seed
const rng = seedrandom(date)

// get correct id based on current date
const correctId = ids[Math.floor(rng() * ids.length)]

console.log('Correct ID:', correctId)

export default function IndexPage(): ReactElement | undefined {
	const router = useRouter()

	// if server-side rendering
	if (typeof window !== 'object') {
		return <Home />
	}

	// avoid blue flash (body is blue, main is white)
	if (!router.isReady) {
		return <main />
	}

	// complete step 1 (0 because of 0-index) if correct QR code scan
	if (router.query.id === correctId) {
		void router.replace('complete?step=0', new Date().getTime().toString())
		return
	}

	// go to home page if no QR code scan
	if (router.query.id === undefined) {
		return <Home />
	}

	// Rickroll if incorrect QR code scan
	void router.replace('https://www.youtube.com/watch?v=uHgt8giw1LY')
}
