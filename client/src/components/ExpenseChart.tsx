"use client";

import { Bar, BarChart, XAxis } from "recharts";
import type { IChartConfig } from "../types";
import type { ChartConfig } from "./ui/chart";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart";

const chartConfig = {
  totalAmt: {
    label: "Total Amount",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

interface ExpenseChartProps {
  labelKey: string;
  chartData: IChartConfig[];
}

export function ExpenseChart({ labelKey, chartData }: ExpenseChartProps) {
  return (
    <ChartContainer
      config={chartConfig}
      className="min-h-50 w-full bg-emerald-900/30 border border-emerald-900 rounded-2xl p-4"
    >
      <BarChart accessibilityLayer data={chartData}>
        <XAxis
          dataKey={labelKey}
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tick={{ fill: "#fff", fontSize: 16 }}
          tickFormatter={(value) => value.slice(0, 12)}
        />
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <Bar
          dataKey="totalAmt"
          fill="var(--color-totalAmt)"
          radius={8}
          maxBarSize={80}
        />
      </BarChart>
    </ChartContainer>
  );
}
