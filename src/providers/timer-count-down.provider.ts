export class TimerCountDown {
  static startTimer(duration: any, display: any) {
    let timer = duration;
    let minutes;
    let seconds;

    setInterval(() => {
      minutes = parseInt((timer / 60).toString(), 10);
      seconds = parseInt((timer % 60).toString(), 10);

      minutes = minutes < 10 ? `0${minutes}` : minutes;
      seconds = seconds < 10 ? `0${seconds}` : seconds;

      display.textContent = `${minutes}:${seconds}`;

      if (--timer < 0) {
        timer = duration;
      }
    }, 1000);
  }
}
