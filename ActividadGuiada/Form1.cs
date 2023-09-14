using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace ActividadGuiada
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            string servidor = "localhost";
            string bd = "libreria";
            string usuario = "root";
            string password = "";
            string datos = null; // Resultado de la consulta

            // Cadena de conexión
            string cadenaConexion = "Database=" + bd + "; Data Source=" + servidor + "; User Id=" + usuario + "; Password=" + password + "";
            
            // Crear instancia de la conexión
            MySqlConnection conexionBD = new MySqlConnection(cadenaConexion);
            MySqlDataReader reader = null;

            // Atrapar posibles errores durante la conexión
            try
            {
                // Creamos la consulta
                string consulta = "select * from libros";
                
                MySqlCommand comando = new MySqlCommand(consulta);
                comando.Connection = conexionBD;
                conexionBD.Open();
                reader = comando.ExecuteReader();


                while (reader.Read())
                {
                    datos += reader.GetString(1) + "-"+ reader.GetString(3) + "\n";
                }
                MessageBox.Show(datos);
            }
            catch(MySqlException ex)
            {
                MessageBox.Show(ex.Message);
            }
            finally {
                conexionBD.Close();
            }
        }
    }
}
