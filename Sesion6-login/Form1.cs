namespace Sesion6
{
    public partial class frmLogin : Form
    {
        public frmLogin()
        {
            InitializeComponent();
        }

        private void label1_Click(object sender, EventArgs e)
        {
            label1.Text = GetSaludo();

        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }

        public String GetSaludo()
        {
            return "Hola a todos";
        }

        private void btnLogin_Click(object sender, EventArgs e)
        {
            // Usuario válido: admin / 123
            String Username = txtUsuario.Text;
            String Password = txtPassword.Text;

            if (Username.Equals("admin") && Password.Equals("123"))
            {
                frmUserScreen userScreen = new frmUserScreen();
                userScreen.Show();
                this.Hide();
            }
            else
            {
                MessageBox.Show("Usuario incorrecto");
            }
        }
    }
}