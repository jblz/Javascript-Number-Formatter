Javascript-Number-Formatter
===========================

Use pure Javascript to format numeric input with arbitrary right-of-decimal precision, thousands separator string, and decimal separator string.  Number.toLocaleString is inherently implementation specific.  This avoids it it.

numberFormatter( 42 )                  returns "42"
numberFormatter( 42.0 )                returns "42"
numberFormatter( 42.0, 1 )             returns "42.0"
numberFormatter( 4242.0, 1 )           returns "4,242.0"
numberFormatter( 4242.0, 1, '.', ',' ) returns "4.242,0"
