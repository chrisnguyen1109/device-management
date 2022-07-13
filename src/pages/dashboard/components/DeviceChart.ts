import { html } from '@/libs';
import { deviceSelector } from '@/redux/deviceSlice';
import { connect } from '@/redux/store';
import { Component, Device } from '@/types';
import { randomColor } from '@/utils';
import { ChartConfiguration, ChartData, Chart, registerables } from 'chart.js';

interface DeviceChartProps {
    devices: Device[];
}

const DeviceChart: Component<DeviceChartProps> = ({ devices }) => {
    const deviceAnalytics = devices.reduce(
        (prev: Record<string, number>, cur) => {
            const deviceName = cur.name.toLowerCase();

            if (prev[deviceName]) {
                prev[deviceName] += cur.power;
            } else {
                prev[deviceName] = cur.power;
            }

            return prev;
        },
        {}
    );

    Chart.register(...registerables);

    const data: ChartData = {
        labels: Object.keys(deviceAnalytics),
        datasets: [
            {
                label: 'My First Dataset',
                data: Object.values(deviceAnalytics),
                backgroundColor: Array.from(
                    { length: Object.keys(deviceAnalytics).length },
                    randomColor
                ),
                hoverOffset: 4,
            },
        ],
    };

    const config: ChartConfiguration = {
        type: 'doughnut',
        data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Power Consumption',
                },
            },
        },
    };

    setTimeout(() => {
        const ctx = document.getElementById('myChart') as HTMLCanvasElement;

        new Chart(ctx, config);
    });

    return html`<div><canvas id="myChart"></canvas></div>`;
};

export default connect(deviceSelector)(DeviceChart);
