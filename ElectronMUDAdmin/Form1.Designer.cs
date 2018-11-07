namespace ElectronMUDAdmin
{
    partial class Form1
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.tabControl1 = new System.Windows.Forms.TabControl();
            this.tabPage1 = new System.Windows.Forms.TabPage();
            this.label3 = new System.Windows.Forms.Label();
            this.CommandsTab = new System.Windows.Forms.TabPage();
            this.commandEditor1 = new ElectronMUDAdmin.components.CommandEditor();
            this.tabControl1.SuspendLayout();
            this.tabPage1.SuspendLayout();
            this.CommandsTab.SuspendLayout();
            this.SuspendLayout();
            // 
            // tabControl1
            // 
            this.tabControl1.Controls.Add(this.tabPage1);
            this.tabControl1.Controls.Add(this.CommandsTab);
            this.tabControl1.Font = new System.Drawing.Font("Consolas", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.tabControl1.Location = new System.Drawing.Point(12, 12);
            this.tabControl1.Name = "tabControl1";
            this.tabControl1.SelectedIndex = 0;
            this.tabControl1.Size = new System.Drawing.Size(776, 426);
            this.tabControl1.TabIndex = 0;
            // 
            // tabPage1
            // 
            this.tabPage1.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(98)))), ((int)(((byte)(112)))), ((int)(((byte)(126)))));
            this.tabPage1.Controls.Add(this.label3);
            this.tabPage1.Location = new System.Drawing.Point(4, 28);
            this.tabPage1.Name = "tabPage1";
            this.tabPage1.Padding = new System.Windows.Forms.Padding(10);
            this.tabPage1.Size = new System.Drawing.Size(768, 394);
            this.tabPage1.TabIndex = 0;
            this.tabPage1.Text = "General";
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Location = new System.Drawing.Point(10, 10);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(216, 19);
            this.label3.TabIndex = 0;
            this.label3.Text = "Server status:  Running";
            // 
            // CommandsTab
            // 
            this.CommandsTab.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(98)))), ((int)(((byte)(112)))), ((int)(((byte)(126)))));
            this.CommandsTab.Controls.Add(this.commandEditor1);
            this.CommandsTab.Location = new System.Drawing.Point(4, 28);
            this.CommandsTab.Name = "CommandsTab";
            this.CommandsTab.Padding = new System.Windows.Forms.Padding(3);
            this.CommandsTab.Size = new System.Drawing.Size(768, 394);
            this.CommandsTab.TabIndex = 1;
            this.CommandsTab.Text = "Commands";
            // 
            // commandEditor1
            // 
            this.commandEditor1.AutoSize = true;
            this.commandEditor1.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.commandEditor1.AutoValidate = System.Windows.Forms.AutoValidate.EnablePreventFocusChange;
            this.commandEditor1.Dock = System.Windows.Forms.DockStyle.Fill;
            this.commandEditor1.Location = new System.Drawing.Point(3, 3);
            this.commandEditor1.Margin = new System.Windows.Forms.Padding(4);
            this.commandEditor1.Name = "commandEditor1";
            this.commandEditor1.Size = new System.Drawing.Size(762, 388);
            this.commandEditor1.TabIndex = 0;
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(96F, 96F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Dpi;
            this.AutoSize = true;
            this.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(119)))), ((int)(((byte)(136)))), ((int)(((byte)(154)))));
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.tabControl1);
            this.Font = new System.Drawing.Font("Consolas", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedToolWindow;
            this.Name = "Form1";
            this.ShowIcon = false;
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterParent;
            this.Text = "ElectronMUD ADMIN";
            this.tabControl1.ResumeLayout(false);
            this.tabPage1.ResumeLayout(false);
            this.tabPage1.PerformLayout();
            this.CommandsTab.ResumeLayout(false);
            this.CommandsTab.PerformLayout();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.TabControl tabControl1;
        private System.Windows.Forms.TabPage tabPage1;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.TabPage CommandsTab;
        private components.CommandEditor commandEditor1;
    }
}

