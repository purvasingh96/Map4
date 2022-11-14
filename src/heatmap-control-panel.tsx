import * as React from 'react';
import {useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import TableModal from './table-modal';


type GeoMapControlPanelProps = {
    name: String,
    dimensions: Map<string, string>,
    onChange: Function
}
const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
  };


function GeoMapControlPanel(props: GeoMapControlPanelProps) {
	const menuItems: any = [];
	const [property, setProperty] = useState(props.dimensions.keys().next().value);
	
    props.dimensions.forEach((value: any, key: any) => {
        menuItems.push(<MenuItem key={key} value={key}>{value.label}</MenuItem>);
    });

	const handleChange = (event: SelectChangeEvent) => {
		const eventTargetValue = event.target.value;
		props.onChange(eventTargetValue);
		setProperty(eventTargetValue);
	}

	return (
		<div className="control-panel">
			<p className="title">{props.name}</p>
			<FormControl fullWidth>
				<InputLabel id="choose-stats-label">Choose a Statistic</InputLabel>
				<Select
					labelId="choose-stats-label"
					label="Choose a Statistic"
					id="choose-stats"
					defaultValue={props.dimensions.keys().next().value}
					onChange={handleChange}
					variant="outlined"
				>
					{menuItems}
				</Select>
				<TableModal name={property}/>
			</FormControl>
		</div>
	);
}

export default GeoMapControlPanel;