const xMarks = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45];
const yMarks = [0, 5, 10, 15, 20, 25, 30];

const Index = () => {
  return (
    <div className="wip-page">
      <header className="wip-banner">
        <span>Work in Progress</span>
      </header>
      <main className="wip-room">
        <div className="table-shadow" aria-hidden="true" />
        <div
          className="work-table"
          role="img"
          aria-label="Top-down view of a workbench with a cutting mat, a soldering kit, and circuit boards under a focused light."
        >
          <div className="table-surface">
            <div className="spotlight" aria-hidden="true" />
            <div className="cutting-mat">
              <div className="mat-grid mat-grid-coarse" aria-hidden="true" />
              <div className="mat-grid mat-grid-fine" aria-hidden="true" />
              <div className="mat-border" aria-hidden="true" />
              <div className="mat-axis mat-axis-x" aria-hidden="true">
                {xMarks.map((mark) => (
                  <span key={`x-${mark}`}>{mark}</span>
                ))}
              </div>
              <div className="mat-axis mat-axis-y" aria-hidden="true">
                {yMarks.map((mark) => (
                  <span key={`y-${mark}`}>{mark}</span>
                ))}
              </div>
              <div className="mat-dim mat-dim-x" aria-hidden="true">
                45 cm
              </div>
              <div className="mat-dim mat-dim-y" aria-hidden="true">
                30 cm
              </div>
              <div className="mat-label">
                <div className="mat-a3">A3</div>
                <div className="mat-size">45 x 30 cm</div>
                <div className="mat-caption">CUTTING MAT</div>
              </div>
              <div className="solder-kit">
                <div className="kit-base">
                  <div className="base-knob" />
                  <div className="sponge-pocket">
                    <div className="sponge-disc" />
                  </div>
                </div>
                <div className="kit-arm" />
                <div className="kit-iron">
                  <div className="iron-body" />
                  <div className="iron-ring" />
                  <div className="iron-button" />
                  <div className="iron-tip" />
                </div>
                <div className="kit-pen" />
                <div className="kit-tweezers" />
                <div className="kit-tips">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
              <div className="pcb pcb-main">
                <div className="pcb-chip pcb-chip-lg" />
                <div className="pcb-chip pcb-chip-md" />
                <div className="pcb-chip pcb-chip-sm" />
                <div className="pcb-cap pcb-cap-1" />
                <div className="pcb-cap pcb-cap-2" />
                <div className="pcb-cap pcb-cap-3" />
                <div className="pcb-terminal" />
                <div className="pcb-pin-row" />
                <div className="pcb-crystal" />
                <div className="pcb-leds" />
              </div>
              <div className="pcb pcb-secondary">
                <div className="pcb-chip pcb-chip-md" />
                <div className="pcb-chip pcb-chip-sm" />
                <div className="pcb-chip pcb-chip-tiny" />
                <div className="pcb-cap pcb-cap-1" />
                <div className="pcb-cap pcb-cap-2" />
                <div className="pcb-terminal pcb-terminal-small" />
                <div className="pcb-pin-row pcb-pin-row-short" />
                <div className="pcb-resistor-pack" />
              </div>
              <div className="pcb pcb-tertiary">
                <div className="pcb-chip pcb-chip-sm" />
                <div className="pcb-cap pcb-cap-1" />
                <div className="pcb-resistor-pack" />
                <div className="pcb-pin-row pcb-pin-row-tiny" />
              </div>
              <div className="wires" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
