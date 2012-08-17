function numberFormatter ( num, places, ksep, dsep ) {
	var rounder = function( n, places ) {
		n = parseFloat(n);
		if( isNaN(n) ) return n;
		places = parseInt(places);
		if( isNaN(places) ) places = 0;
		var factor= Math.pow(10,places);
		return Math.floor(n*factor+((n*factor*10)%10>=5?1:0))/factor;
	};
	var num = rounder( num, places );
	if ( isNaN( num ) ) return num;
	if ( 'undefined' == typeof places ) places = 0;
	if ( 'undefined' == typeof ksep ) ksep = ',';
	if ( 'undefined' == typeof dsep ) dsep = '.';
	num = num.toString();
	if ( places > 0 ) {
		var dot = num.indexOf( '.' );
		var rlength = num.substr( dot ).length - 1;
		if ( -1 == dot ) {
			num = num + '.';
			for ( var i = 0; i < places; i++ ) {
				num = num + '0';
			}
		}
		else if ( places > rlength ) {
			var diff = places - rlength;
			for ( var i = 0; i < diff; i++ ) {
				num = num + '0';
			}
		}
	}

	var l = '', m = '', r = '';
	num.replace( /^([0-9]*)?(\.)?([0-9]*)?$/, function( $0, $1, $2, $3 ) {
		var llen = $1.length;
		if ( llen > 3 ) {
			for ( var i = llen - 1; i >= 0; i-- ) {
				var x = i - llen + 1;
				if ( x != 0 && x % 3 == 0 ) l = ksep + l;
				l = $1[i] + l;
			}
		}
		else {
			l = $1;
		}
		if ( $2 == '.' && ! isNaN( $3 ) ) {
			m = dsep;
			r = $3;
		}
	});
	return l + m + r;
};
