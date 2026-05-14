type KPIWidgetProps = {
  value: number;
  format?: 'currency' | 'percent' | 'number';
  helperText?: string;
  ariaLabel?: string;
}

const formatValue = (value: number, format: KPIWidgetProps['format'] = 'number') => {
  switch (format) {
    case 'currency':
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
      }).format(value);
    case 'percent':
      return new Intl.NumberFormat('en-US', {
        style: 'percent',
        minimumFractionDigits: 1,
        maximumFractionDigits: 2,
      }).format(value);
    case 'number':
    default:
      return new Intl.NumberFormat('en-US').format(value);
  }
};

function KPIWidget({ value, format = 'number', helperText, ariaLabel }: KPIWidgetProps) {
  return (
    <div className="flex flex-col gap-y-2" aria-label={ariaLabel}>
      <p className="text-3xl md:text-4xl font-semibold text-text-strong tracking-tight">
        {formatValue(value, format)}
      </p>
      {helperText ? <p className="text-xs text-text-muted">{helperText}</p> : null}
    </div>
  );
}

export default KPIWidget;