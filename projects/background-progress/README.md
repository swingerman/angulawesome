![npm](https://img.shields.io/npm/dw/@swingerman/background-progress?label=dwonloads&logo=npm&style=for-the-badge) [![Donate](https://img.shields.io/badge/Donate-PayPal-yellowgreen?style=for-the-badge&logo=paypal)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=S6NC9BYVDDJMA&source=url)

# Background Progress Directive

A simple directive for Angular 12+ that renders a linear gradient background on the element simulating a simple progress bar.

The idea was to use it on inputs but can be used for other elements as well.

### Properties

| Name       | Description |
|------------|-------------|
| @Input() <br>backgroundColor: string | Sets the background color of the element             |
| @Input() <br>foregroundColor: string | Sets the progress color                              |
| @input() <br>fillPercentGap: number  | Sets the blur size at the edge of the progress color |
| @input() <br>fillPercent: number     | Sets the actual percent                              |






