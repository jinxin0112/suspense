import React from 'react';
import useSWR from 'swr';

const API = `http://www.mocky.io/v2/5de0933d3500008865480cc1`;
const fetcher = (url: string) => fetch(url).then((r: Response) => r.json());

const App: React.SFC = () => {
	const { data } = useSWR(API, fetcher, { initialData: {} });

	const { hello } = data;
	
	if (!hello) return <>loading...</>;
	return <>{data.hello}</>;
};

export default App;
